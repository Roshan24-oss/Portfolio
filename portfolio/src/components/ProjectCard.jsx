import React from "react";

const ProjectCard = ({ title, description, tech, image, link }) => {
  return (
    <div className="
      bg-dark-300
      rounded-2xl
      overflow-hidden
      cursor-pointer
      hover:-translate-y-2
      hover:shadow-xl
      transition
      duration-300
    ">
      {/* Clickable Image */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover hover:opacity-90 transition"
        />
      </a>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech?.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
