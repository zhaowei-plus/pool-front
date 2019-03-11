
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
      window.registration = registration;
      console.log('Registered events at scope: ', registration.scope);
    }).catch(err => {
      console.error('注册失败');
    })
  }
}

export default registerServiceWorker;