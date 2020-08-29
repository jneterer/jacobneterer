export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'jacobneterer.com',
            apiId: process.env.SANITY_STUDIO_APP_ID,
            buildHookId: process.env.SANITY_STUDIO_BUILD_HOOK_ID,
            name: 'jacobneterer'
          }
        ]
      }
    },
    {
      name: 'project-users'
    },
    {
      name: 'project-info'
    },
    {
      name: 'sanity-tutorials'
    }
  ]
}