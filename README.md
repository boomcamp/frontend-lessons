# BoomCamp Frontend Course

This project houses the web application for delivering the BoomCamp Frontend
training course.

## Development

### Getting Started

To install project dependencies run

```sh
npm install
```

Once dependencies have been installed you can run the project locally by
running...

```sh
npm start
```

Visit `http://localhost:8000/` to view the app.

## Tech

This site is built using [Gatsby.js](https://www.gatsbyjs.org/) which is a
static site generator that utilizes GraphQl and React.js. If you're unfamiliar
going through the tutorials will be invaluable.

## 🔥 Features

This project is based on the gatsby-gitbook-starter

- Write using Markdown / [MDX](https://github.com/mdx-js/mdx)
- GitBook style theme
- Syntax Highlighting using Prism [`Bonus`: Code diff highlighting]
- Google Analytics Integration
- Automatically generated sidebar navigation, table of contents, previous/next
- Edit on Github
- Fully customisable
- Rich embeds and live code editor using MDX
- Easy deployment: Deploy on Netlify / Now.sh / Docker

## 🔧 Configure

Write lesson files in `lessons` folder.

Open `config.js` for templating variables. Broadly configuration is available
for `gatsby`, `header`, `sidebar` and `siteMetadata`.

- `gatsby` config for global configuration like

  - `pathPrefix` - Gatsby Path Prefix
  - `siteUrl` - Gatsby Site URL
  - `gaTrackingId` - Google Analytics Tracking ID

- `header` config for site header configuration like

  - `title` - The title that appears on the top left
  - `githubUrl` - The Github URL for the docs website
  - `helpUrl` - Help URL for pointing to resources
  - `tweetText` - Tweet text
  - `links` - Links on the top right

- `sidebar` config for navigation links configuration

  - `forcedNavOrder` for left sidebar navigation order. It should be in the
    format "/<filename>"
  - `frontLine` - whether to show a front line at the beginning of a nested
    menu.(Collapsing capability would be turned of if this option is set to
    true)
  - `links` - Links on the bottom left of the sidebar
  - `ignoreIndex` - Set this to true if the index.md file shouldn't appear on
    the left sidebar navigation. Typically this can be used for landing pages.

- `siteMetadata` config for website related configuration

  - `title` - Title of the website
  - `description` - Description of the website
  - `ogImage` - Social Media share og:image tag
  - `docsLocation` - The Github URL for Edit on Github

- For sub nesting in left sidebar, create a folder with the same name as the top
  level `.md` filename and the sub navigation is auto-generated. The sub
  navigation is alphabetically ordered.

## Live Code Editor

To render react components for live editing, add the `react-live=true` to the
code section. For example:

```javascript react-live=true
<button>Edit my text</button>
```

In the above code, just add `javascript react-live=true` after the triple quote

````to start rendering react components that can be edited by users.

## 🤖 SEO friendly

This is a static site and comes with all the SEO benefits. Configure meta tags
like title and description for each markdown file using MDX Frontmatter

```markdown
---
title: 'Title of the page'
metaTitle: 'Meta Title Tag for this page'
metaDescription: 'Meta Description Tag for this page'
---
````

Canonical URLs are generated automatically.
