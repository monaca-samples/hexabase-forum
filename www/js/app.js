const $ = Dom7;
// Hexabaseの初期化
const { HexabaseClient } = hexabase;
const client = new HexabaseClient();
const app = new Framework7({
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  // App routes
  routes: routes,
});
