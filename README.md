## MainInfo

Main tools
- [lerna](https://lerna.js.org/): Manage and create monorepo 
- [tsdx](https://tsdx.io/): Tool to create ts libraries

### Get started

- `cp .npmrc.example .npmrc`  
- [Get github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `write:packages` rules and replace `Token` in .npmrc file.
- `yarn`

### Manual Publishing
- if you did't create/verify your user in the registry early - do it.  
`npm adduser` 
- `npx lerna publish`

### Integration

- Create .npmrc file `always-auth=true
@evrone-erp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=Token
`
- [Get github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `read:packages` rules and replace `Token` in .npmrc file.
- Install package `yarn add @evrone-erp/lib-name`


### Create new lib

It is recommended to use [tsdx](https://tsdx.io/) to create new libraries

- `cd packages`
- `npx tsdx create lib-name`
- Edit package.json: 
  - remove prettier block.
  - update `name` field. `lib-name -> @evrone-erp/lib-name`.
  - add fields `
  "repository": "https://github.com/evrone-erp/frontend-shared",
  "publishConfig": {
    "@evrone-erp:registry": "https://npm.pkg.github.com/evrone-erp"
  },
  `



