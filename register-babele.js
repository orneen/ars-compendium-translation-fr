Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'ars-compendium-translation-fr',
            lang: 'fr',
            dir: 'packs'
        });
    }
});