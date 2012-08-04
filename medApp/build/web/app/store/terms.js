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
            termName: 'A Term',
            categoryId: 0,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'B Term',
            categoryId: 1,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'C Term',
            categoryId: 2,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'D Term',
            categoryId: 3,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'E Term',
            categoryId: 4,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'F Term',
            categoryId: 0,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'G Term',
            categoryId: 1,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'H Term',
            categoryId: 2,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'I Term',
            categoryId: 3,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }, {
            termName: 'J Term',
            categoryId: 4,
            englishText: 'English',
            spanishText: 'Spanish',
            nativeText: 'Native',
            audioLocation: 'resources/audio/ping.mp3'
        }]
    }
})