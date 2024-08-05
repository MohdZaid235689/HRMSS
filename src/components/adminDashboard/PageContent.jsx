import React from 'react';

const PageContent = ({ title }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p>Content for {title}</p>
    </div>
  );
};

export default PageContent;
