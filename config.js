// Configuración de la plataforma.
// ENDPOINT: URL de la aplicación web de Google Apps Script (termina en /exec).
// Si queda vacío, la página funciona en modo local: las respuestas se guardan en
// el dispositivo y se pueden descargar como archivo.
window.CONFIG = {
  ENDPOINT: "https://script.google.com/macros/s/AKfycbyH-3jStggoi-cEDn2Ik32lJP-_dThxMWR6e5wgDt9MX0CHgvUk_7dGhxRu7BEWEMvzWg/exec",
  // Dirección pública de la actividad (la que codifican los QR).
  URL_PUBLICA: "https://ymunozs.github.io/taller-sn/",
  SESION: "Taller2-SN-2026",
  INSTITUCIONES: ["UST", "UAndes"],
  GRUPOS: 10,
  MIN_CARACTERES: 10
};
