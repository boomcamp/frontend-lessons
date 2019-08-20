const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://frontend.boom.camp',
    gaTrackingId: null,
  },
  header: {
    logo:
      'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png',
    logoLink: '',
    title: 'Boom.Camp Frontend Course',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    links: [{ text: 'boom.camp', link: 'http://boom.camp' }],
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/week-1',
      '/week-2',
      '/week-3',
      '/week-4',
      '/week-5',
      '/week-6',
      '/week-7',
      '/week-8',
      '/week-9',
      '/week-10',
      '/week-11',
      '/week-12',
      '/week-13',
      '/week-14',
      '/week-15',
    ],
    links: [{ text: 'Boom.Camp', link: 'https://boom.camp' }],
    frontline: false,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: 'Boom.Camp Frontend Development Course',
    description:
      'Frontend Development course lessons for https://boom.camp students',
    ogImage: null,
    docsLocation:
      'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
};

module.exports = config;
