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

## Useful resources

Are Service Workers Ready? - Check Browser Support: https://jakearchibald.github.io/isserviceworkerready/
Setting up Remote Debugging on Chrome: https://developers.google.com/web/tools/chrome-devtools/remote-debugging/
Getting that "Web App Install Banner": https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/
Getting Started with Service Workers (don't read too far, there's stuff in there we'll learn later ;-)): https://developers.google.com/web/fundamentals/getting-started/primers/service-workers

## Listenable Events (in Service Worker)

Here are the events:

### Fetch - is one of the events that you can listen in the service worker.

- It is triggered whenever a resource is loaded in to the browser.
- It is triggered when a fetch request is called in the app.

However, it is not triggered for the XML HTTP request or for packages like axios which is built on top of that.

### Push Notifications

These are sent from another server. The vendor service of the browser vendors will send a push notifiaction to client app.

#### Why do this in the Service worker and not in the app?

Because, these run in the background.
If the user interacts with the notification, you can also react to the user interactions.

Native like look.

### Background Synchronization

If the internet connection is bad, the content is failed.
Some browsers allow you to use background sync. If certain actions can't be executed when internet connectivity is down, these background sync allows you to execute it once it is connected.

Hence these are run in background.

### Service worker life cycle phases.

All the service worker life cycle phase transitions can be listened to as events.


## Life Cycle of Service Worker:


1. Index.html loads app.js
2. app.js registers sw.js
   
Browser installs the SW.js -> results in install Event.

After installation SW is activated, Activation, Idle and terminated.

## Scope in Service Worker

The Scope can be passed as an argument while registering Service Wroker.

```js

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js', { scope: '/help/' })
    .then(function () {
      console.log('Service worker registered !!')
    })
}

```

# NOTE:
Service Workers work only on pages that are of https and localhost is an exception.

## Activation in Service Worker

Service Worker activation is interesting.

The Activate event is triggered after the install event.

```js

self.addEventListener('install', (ev) => {
  console.log('[Service Worker] Install event triggered ... ', ev);
})

self.addEventListener('activate', (ev) => {
  console.log('[Service Worker] Activating Service Worker  ... ', ev);
  return self.clients.claim();
})

```

## Fetch Event

Fetch event can act as an network proxy. It is triggered for every resource download, every API hit.
Inside the Service Worker file, you can listen to `fetch` event type.

```js
self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetch event triggered ... ', event);
  event.respondWith(fetch(event.request));
})

```

`event.respondWith()` is a function that you can use to send custom response for the fetch event. You can choose to return a `promise` yourself.

`event.respondWith(null)` would mean that every fetch request would just return null.

- You can only return Response objects of type "opaque" if the fetchEvent.request object's mode is "no-cors". This prevents the leaking of private data.
- You can only return Response objects of type "opaqueredirect" if the fetchEvent.request object's mode is "manual".
- You cannot return Response objects of type "cors" if the fetchEvent.request object's mode is "same-origin".

