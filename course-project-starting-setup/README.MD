# Progressive Web Apps - Complete Guide
This source code is part of Maximilian Schwarzmüller's "Progressive Web Apps - Complete Guide" course on udemy.com.

# How to Use
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and **navigate into this project folder**. There, run `npm install` to install all required dependencies.

Finally, run `npm start` to start the development server and visit [localhost:8080](http://localhost:8080) to see the running application.


```js
{
  "name": "Sweet Child O' Mine", // long name of app
  "short_name": "Sweet",         // short name of app
  "start_url": "/index.html",    // Which page to load on startup
  "scope": ".",                  // which pages are included in "PWA experience"
  "display": "standalone",       // Should it look like a standalone app?
  "background_color": "#fff",    // Background whilst loading & Splashscreen
  "theme_color": "#3F51B5",      // Theme color (e.g. on top bar in task switcher)
  "description": "keep running until you wear out!", // Description
  "dir": "ltr",                  // Read direction of your app ltr - left to right
  "lang": "en-US",               // Main language of app
  "orientation": "portrait-primary", // Set (and enforce) default orientation
  "icons": [...]                 // Configure icons (e.g. on homescreen)
}
```