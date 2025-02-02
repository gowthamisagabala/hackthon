import { useEffect, useState } from "react";
import './GitHubRepoSearch.css'
const GitHubRepoSearch = () => {
  const [query, setQuery] = useState("react"); // Default search term
  const [language, setLanguage] = useState(""); // Selected programming language
  const [sort, setSort] = useState("stars"); // Sorting criteria
  const [repos, setRepos] = useState([]); // Repository data
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("stars");

  useEffect(() => {
    const fetchRepos = async () => {
      if (!query) return;

      setLoading(true);
      try {
        let url = `https://api.github.com/search/repositories?q=Q`;
        if (language) {
          url += `+language:${language}`;
        }
        url += `&sort=${sort}&order=desc`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setRepos(data.items);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [query, language, sort]);
  const sortedRepos = [...repos].sort((a, b) => {
    if (sortOption === "stars") {
      return b.stargazers_count - a.stargazers_count; // Sort by stars (Descending)
    } else if (sortOption === "forks") {
      return b.forks_count - a.forks_count; // Sort by forks (Descending)
    }
    return 0;
  });

  return (
    <div className="container">
      <h2>GitHub Repository Search</h2>
      <div className="search-bar">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search repositories..."
      />
      </div>

      {/* Language Filter */}
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">All Languages</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="go">Go</option>
        <option value="ruby">Ruby</option>
      </select>

      {/* Sorting Options */}
      <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="stars">Sort by Stars</option>
          <option value="forks">Sort by Forks</option>
        </select>


      
        <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3>{repo.name}</h3>
            </a>
            <p>{repo.description || "No description available"}</p>
            <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
            <p><strong>Language:</strong> {repo.language || "Not specified"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default GitHubRepoSearch;



    