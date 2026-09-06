/* ============================================================
   ÓNÍLÉ · CONFIGURACIÓN RÁPIDA DEL MENÚ
   Este es el único archivo que normalmente tendrás que editar.
   true  = mostrar / disponible
   false = ocultar / no disponible
   ============================================================ */
window.ONILE_CONFIG = {
  business: {
    instagram: '',
    tiktok: '',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Periferico+Emiliano+Sanchez+Piedras+152+Plaza+Portales'
  },

  /* Activa el modo evento cuando haya una noche especial. */
  event: {
    active: true,
    title: 'Promociones & Eventos',
    message: 'Descubre las promociones especiales disponibles en Ónílé.',
    floatingButton: true,
    bottles: true,
    buckets: true
  },

  /* Promociones: activa o desactiva cada flyer sin borrar archivos. */
  promos: [
    { active: true, src: 'img/promociones/promo1.png',   alt: 'Promoción 1 del evento Ónílé',   caption: 'Promoción especial 1' },
    { active: true, src: 'img/promociones/promo1.1.png', alt: 'Promoción 1.1 del evento Ónílé', caption: 'Bellako Deluxe' },
    { active: true, src: 'img/promociones/promo2.png',   alt: 'Promoción 2 del evento Ónílé',   caption: 'Promoción especial 2' },
    { active: true, src: 'img/promociones/promo2.1.png', alt: 'Promoción 2.1 del evento Ónílé', caption: 'Rip Perreo' }
  ],

  /*
     Disponibilidad por nombre EXACTO tal como aparece en la carta.
     'soldout' = se ve marcado como AGOTADO.
     'hidden'  = no aparece.
     'available' o no incluirlo = normal.
  */
  availability: {
    // 'Costra de Camarón': 'soldout',
    // 'Aguachile': 'hidden',
    // 'Piña Colada': 'soldout',
    // 'Buchanan’s 18': 'hidden'
  },

  /* Horarios usados para mostrar “Qué está disponible ahora”. */
  schedule: {
    breakfast: { start: '08:00', end: '12:00' },
    buffet:    { start: '12:00', end: '20:00' },
    drinks:    { days: [4,5,6], start: '20:00', end: '24:00' }
  }
};
