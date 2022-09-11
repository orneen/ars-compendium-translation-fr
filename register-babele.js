Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'ars-traduction-compendium-fr',
            lang: 'fr',
            dir: 'packs'
        });
    }
});