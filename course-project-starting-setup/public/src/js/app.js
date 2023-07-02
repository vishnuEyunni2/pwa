
var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js', { scope: '/help/' })
    .then(function () {
      console.log('Service worker registered !!')
    })
}

window.addEventListener('beforeinstallprompt', (ev) => {
  console.log('Before install prompt fired!');
  ev.preventDefault();
  deferredPrompt = ev;
  return false
});