import React from 'react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="banner-area page-banner">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12 my-auto">
            <div className="banner-content text-center">
              <h2 className="banner-title">{title}</h2>
              <div className="breadcrumb-container">
                <span property="itemListElement" typeof="ListItem">
                  <Link to="/" property="item" typeof="WebPage" className="home">
                    <span property="name">Programmingglore</span>
                  </Link>
                  <meta property="position" content="1" />
                </span>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <span> // </span>
                    <span property="itemListElement" typeof="ListItem">
                      {crumb.link ? (
                        <Link to={crumb.link} property="item" typeof="WebPage">
                          <span property="name">{crumb.name}</span>
                        </Link>
                      ) : (
                        <span property="name" className="post post-page current-item">{crumb.name}</span>
                      )}
                      <meta property="position" content={index + 2} />
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;

