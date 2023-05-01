# THIS IS A WORK IN PROGRESS

This is the code repository for the ZOOM program, which is intended to be published as an open-source tool to aid developers in enhancing their efficiency, particularly in remote environments.

## Prerequisites

Before starting, ensure that you have the following software installed on your system:

- Node.js (LTS version recommended)
- npm (usually bundled with Node.js)
- Firebase CLI (optional, for deploying to Firebase)
- Additionally, you should have a Firebase account and a Firebase project set up.

## Adding admin-sdk.json to root of the folder

In order to connect to your Firebase project, you need to include the admin-sdk.json configuration file in the root directory of your project. This file has been provided in the zipped folder.

## Getting Started

```
git clone https://github.com/hassaanp/accelerate.git
```

```
cd accelerate
```

Next, install the project dependencies:

```
npm install
```

To run the development server, execute the following command:

npm run dev

The development server should now be running, and you can access it by opening http://localhost:3000 in your web browser.

## Deploying to Vercel

Pushing the code to main will trigger a build for production and can be accessed at the [live url](https://zoom-two-lime.vercel.app/)
