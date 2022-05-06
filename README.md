## MainInfo

Main tools
- [lerna](https://lerna.js.org/): Manage and create monorepo 
- [tsdx](https://tsdx.io/): Tool to create ts libraries

## Clone error
If you have got an auth error after git clone - need to get github personal access token (see to 'Get started' section how to do it)

### Get started

- `cp .npmrc.example .npmrc`  
- [Get github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `write:packages` rules and replace `Token` in .npmrc file.
- `yarn`

### Manual Publishing

IMPORTANT: packages are published automatically after merging PR to the master branch!!!
So, manual publishing and next steps usefull ONLY for unusual cases.

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

### Integration with Ui-kit package

If some evrone-erp/package needs to use ui-kit - must install MUI (@emotion/react, @emotion/styled, @mui/lab, @mui/material) and Next.js libraries in that package.
Reason: thus solution give unified stack of libraries, predefined design-system and the ability to install more recent minor versions of stack's libraries

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
### Adding and using SVG icons

BaseIcon component helps to use custom SVG icons inside ui-kit and outisde.
Adding a new icon:
- Minimize svg - https://jakearchibald.github.io/svgomg/
- Create new component in base-icon/icons
- Use IconRoot in the root of new icon component
- Pass minimized svg in IconRoot
