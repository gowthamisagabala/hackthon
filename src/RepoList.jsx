import React from "react";
import RepoCard from "./RepoCard";

function RepoList({ repos }) {
  return (
    <div>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default RepoList;