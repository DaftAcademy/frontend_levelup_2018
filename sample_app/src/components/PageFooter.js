import React from 'react';
import './PageFooter.sass';

const PageFooter = () => (
  <div className="page-footer">
    <div className="page-footer__content">
      <div className="page-footer__social">
        <span className="page-footer__social-lead">Follow SpaceX</span>
        <ul className="page-footer__social-links">
          <li className="page-footer__social-link">
            <a href="http://twitter.com/">Twitter</a>
          </li>
          <li className="page-footer__social-link">
            <a href="http://youtube.com/">Youtube</a>
          </li>
          <li className="page-footer__social-link">
            <a href="http://flickr.com/">Flickr</a>
          </li>
          <li className="page-footer__social-link">
            <a href="http://instagram.com/">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="page-footer__copyright">
        2018 Space Exploration Technologies Corp.
      </div>
    </div>
  </div>
);

export default PageFooter;
