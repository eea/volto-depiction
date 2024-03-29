# volto-depiction

[![Releases](https://img.shields.io/github/v/release/eea/volto-depiction)](https://github.com/eea/volto-depiction/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-depiction%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-depiction/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-depiction%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-depiction/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-depiction-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-depiction-develop)

[Volto](https://github.com/plone/volto) add-on: To use depiction image scales

## Features

Make Volto aware of [depiction](https://github.com/eea/eea.depiction) image scales (e.g.: `image_preview`, `image_thumb`, `image_large`)

## Usage

See [volto-listing-block](https://github.com/eea/volto-listing-block)

## Getting started

### Try volto-depiction with Docker

1. Get the latest Docker images

   ```
   docker pull plone
   docker pull plone/volto
   ```

1. Start Plone backend

   ```
   docker run -d --name plone -p 8080:8080 -e SITE=Plone -e PROFILES="profile-plone.restapi:blocks" plone
   ```

1. Start Volto frontend

   ```
   docker run -it --rm -p 3000:3000 --link plone -e ADDONS="@eeacms/volto-depiction" plone/volto
   ```

1. Go to http://localhost:3000

### Add volto-depiction to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-depiction"
  ],

  "dependencies": {
      "@eeacms/volto-depiction": "^1.0.0"
  }
  ```

- If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --addon @eeacms/volto-depiction
  cd my-volto-project
  ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-depiction/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-depiction/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-depiction/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-depiction/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
