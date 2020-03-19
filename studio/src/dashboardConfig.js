export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e73917fc32df5a48722a8a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jkhzeff1',
                  apiId: '2747a62c-7e2c-45af-851c-7a3df73c8fb7'
                },
                {
                  buildHookId: '5e73917f7932e4d1aa913cbc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-347jyi5c',
                  apiId: '0859e179-c910-4718-9c5c-78a27249c292'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swinner2/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-347jyi5c.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
