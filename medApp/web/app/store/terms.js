Ext.define('medApp.store.terms', {
    extend: 'Ext.data.Store',
    config: {
        model: 'medApp.model.term',
        id: 'categories',
        sorters: 'termName',
        grouper: function (record) {
            return record.get('termName')[0];
        },
        data: [{
            termName: 'Chest pain',
            categoryId: 0,
            englishText: 'Do you have chest pain?',
            spanishText: 'Tiene usted dolor del pecho?',
            nativeText: 'Nteona rawk\'ush?',
            nativePron: 'Nee-tee-o-na rwak-k-oosh?',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'Hurt location',
            categoryId: 0,
            englishText: 'Where does it hurt?',
            spanishText: 'Donde le duele?',
            nativeText: 'Bartra nteonua tra?',
            nativePron: 'Bar-tra n\'tay-o-nu-a tra?',
            audioLocation: 'resources/audio/ping.mp3'
        }]
    }
})