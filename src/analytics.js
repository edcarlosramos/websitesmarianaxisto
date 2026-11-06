// Sends events to Google Tag Manager (container GTM-5SMS84JZ), which forwards them to Google Analytics.
// GTM listens for these through a "Custom Event" trigger with the same event name.
export const track = (event, params = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};
