// Service worker mínimo: no cachea nada, solo habilita que el navegador
// ofrezca "Instalar app" / "Agregar a pantalla de inicio".
self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});
