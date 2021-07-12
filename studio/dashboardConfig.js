export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ec4b905a85350abb8e0a01',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-iuy7em5y',
                  apiId: '0436e26d-f8a0-4ebe-8965-4d9eb948ba39'
                },
                {
                  buildHookId: '60ec4b907ad7270d8b0986d6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nr6tm9nt',
                  apiId: '4517fe9a-f41f-4833-a374-a11883a4ce9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mheyw/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nr6tm9nt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
