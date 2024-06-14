import './BreadCrumbs.scss';
import homeIcon from '/img/icons/home.svg';
import arrowRight from '/img/icons/arrow-right.svg';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

export const BreadCrumbs = () => {
  const location = useLocation();
  const stage = location.pathname.split('/');

  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs__item">
        <img src={homeIcon} alt="home-icon" className="breadcrumbs__icon--home" />
      </Link>

      {stage.map((step, index) => {
        const slice = stage[1] === 'products' ? 'phones' : stage[1];
        let breadCrumbsLine = '';

        if (slice === 'phones') {
          breadCrumbsLine = '../phones';
        } else {
          breadCrumbsLine = stage.slice(0, index + 1).join('/');
        }

        const lower = capitalizeFirstLetter(step);

        return (
          <React.Fragment key={index}>
            {index === stage.length - 1 ? (
              <span className="breadcrumbs__title">{lower}</span>
            ) : (
              <Link to={breadCrumbsLine} className="breadcrumbs__title active-bread">
                {step === 'products' ? 'Phones' : lower}
              </Link>
            )}

            {index !== stage.length - 1 ? (
              <div className="breadcrumbs__item">
                <img src={arrowRight} alt="home-icon" className="breadcrumbs__icon" />
              </div>
            ) : (
              ''
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
