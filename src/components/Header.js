import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import './styles.css';

import { AuthContext } from './authentication.js';
import Sidebar from './sidebar';
import NavProfile from './NavProfile.js';

const Header = ({ location }) => {
  const { userProfile } = React.useContext(AuthContext);

  return (
    <StaticQuery
      query={graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
            }
          }
        }
      `}
      render={data => {
        const logoImg = require('./images/logo.svg');
        const twitter = require('./images/twitter.svg');
        const {
          site: {
            siteMetadata: { headerTitle, githubUrl, helpUrl, tweetText, logo },
          },
        } = data;
        const finalLogoLink = logo.link !== '' ? logo.link : '/';
        return (
          <div className={'navBarWrapper'}>
            <nav className={'navbar navbar-default navBarDefault'}>
              <div className={'navbar-header'}>
                <button
                  type="button"
                  className={'navbar-toggle collapsed navBarToggle'}
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className={'sr-only'}>Toggle navigation</span>
                  <span className={'icon-bar'} />
                  <span className={'icon-bar'} />
                  <span className={'icon-bar'} />
                </button>
                <Link to={finalLogoLink} className={'navbar-brand navBarBrand'}>
                  {logo.image !== '' ? (
                    <img
                      className={'img-responsive'}
                      src={logo.image}
                      alt={'logo'}
                    />
                  ) : (
                    <img
                      className={'img-responsive'}
                      src={logoImg}
                      alt={'logo'}
                    />
                  )}
                  <div
                    className={'headerTitle'}
                    dangerouslySetInnerHTML={{ __html: headerTitle }}
                  />
                </Link>
              </div>
              <div
                id="navbar"
                className={'navbar-collapse collapse navBarCollapse'}
              >
                <div className={'visible-xs'}>
                  <Sidebar location={location} />
                  <hr />
                </div>
                <ul className={'nav navbar-nav navBarUL'}>
                  {githubUrl !== '' ? (
                    <li className={'githubBtn'}>
                      <GitHubButton
                        href={githubUrl}
                        data-show-count="true"
                        aria-label="Star on GitHub"
                      >
                        Star
                      </GitHubButton>
                    </li>
                  ) : null}
                  {helpUrl !== '' ? (
                    <li>
                      <a href={helpUrl}>Need Help?</a>
                    </li>
                  ) : null}
                </ul>
                }
                <ul className={'nav navbar-nav navBarUL navbar-right'}>
                  {tweetText !== '' ? (
                    <li>
                      <a
                        href={
                          'https://twitter.com/intent/tweet?&text=' + tweetText
                        }
                        target="_blank"
                      >
                        <img
                          className={'twitterIcon'}
                          src={twitter}
                          alt={'Twitter'}
                        />
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <NavProfile
                      imageUrl={userProfile.imageUrl}
                      name={userProfile.givenName}
                    />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
      }}
    />
  );
};

export default Header;
