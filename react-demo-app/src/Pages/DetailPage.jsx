import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById } from "../Services/Api";


const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostById(id).then(setPost).catch(() => setPost(null));
  }, [id]);

  if (!post) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/main")}
          className="group flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-all duration-200 animate-fade-in"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-slide-up">
            {post.title}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 animate-expand"></div>
          <p className="text-gray-700 leading-relaxed text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            {post.body}
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => navigate("/main")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl animate-bounce-in"
              style={{ animationDelay: '400ms' }}
            >
              Back
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DetailPage;

