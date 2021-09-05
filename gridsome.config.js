const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')


const postcssPlugins = [
  tailwind(),
]


//if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  
  siteName: 'SARGON',
  siteDescription: 'ontology for smart energy domain',
  siteUrl: 'https://sargonnew.netlify.app/',
  templates: {

  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'usageDetails/**/*.md',
        typeName: 'UsageDetail',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'webpages/**/*.md',
        typeName: 'Webpage', 
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'ontologyPages/**/*.md',
        typeName: 'OntologyPage',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'usageDetails/**/*.md',
        typeName: 'UsageDetail',
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'SARGON',
          feed_url: 'https://sargon-n5geh.netlify.app/rss.xml',
          site_url: 'https://sargon-n5geh.netlify.app/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://sargon-n5geh.netlify.app/' + node.path,
          author: 'Maliheh Haghgoo',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['remark-attr'],
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Ocean', skipInline: true } ],
        ['gridsome-plugin-remark-youtube', {width: '85%', align: 'auto'}],
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
