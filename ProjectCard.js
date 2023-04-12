import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(project.likes);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="project-card" onClick={toggleExpansion}>
      <img src={project.imageUrl} alt={project.title} />
      <div className="project-title">{project.title}</div>
      {isExpanded && (
        <div className="project-details">
          <div className="project-description">{project.description}</div>
          <div className="project-tech">{project.tech}</div>
        </div>
      )}
      <div className="project-actions">
        <div className="like-count">{likes} likes</div>
        <button onClick={handleLike}>❤️</button>
      </div>
    </div>
  );
};

export default ProjectCard;