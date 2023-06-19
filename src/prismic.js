import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'Oversear-example'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5aSTliOHhBQUFDQUF2V0do.DGYg77-9ce-_vUPvv713ZO-_ve-_ve-_ve-_vVPvv70cGHUyZ--_vQYn77-9Su-_ve-_vXx7Hu-_vQ',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  /*routes: [
    {
      type: 'post',
      path: '/post',
    },
  ],*/
})