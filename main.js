const {Hutech} = require('./hutech');

(async() => {
  const app = new Hutech();
  await app.init();
  await app.login('ok', 'ok');
  await app.gotoTkb();
  await app.close();
})();
