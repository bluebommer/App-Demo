const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search..."
    onChange={(e) => onSearch(e.target.value)}
    className="w-full border p-2 rounded"
  />
);

export default SearchBar;
