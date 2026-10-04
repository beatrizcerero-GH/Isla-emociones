/* Service worker mínimo para que la app sea "instalable" en el móvil.
   No cachea nada (así siempre ves la última versión); solo habilita la instalación. */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
self.addEventListener('fetch', function (e) { /* red por defecto */ });
