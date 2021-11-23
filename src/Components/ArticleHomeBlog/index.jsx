import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

const ArticleHomeBlog = ({ title, image }) => {
  return (
    <div className="newsArticles">
      <h2>{title}</h2>
      <img src={image} alt="imageCard" />
    </div>
  );
};
ArticleHomeBlog.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default ArticleHomeBlog;
