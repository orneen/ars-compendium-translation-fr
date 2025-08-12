Hooks.once('ready', () => {
  if (game.babele) {
    game.babele.register({
      module: 'ars-compendium-translation-fr',
      lang: 'fr',
      dir: 'packs'
    });
    console.log("✔️ Traductions Babele enregistrées pour ars-compendium-translation-fr");
  } else {
    console.warn("❌ Babele n'est pas disponible !");
  }
});
