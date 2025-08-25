import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../Services/Api";
import SearchBar from "../Components/SearchBar";


const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = (term) => {
    setFiltered(
      posts.filter((post) =>
        post.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent animate-fade-in">
          Posts
        </h1>
        
        <div className="mb-8 animate-slide-up">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <ul className="space-y-4">
          {filtered.map((post, index) => (
            <li
              key={post.id}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/detail/${post.id}`)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;



