Ext.define('medApp.model.term', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'termName',
            type: 'string'
        }, {
            name: 'categoryId',
            type: 'int'
        }, {
            name: 'englishText',
            type: 'string'
        }, {
            name: 'spanishText',
            type: 'string'
        }, {
            name: 'nativeText',
            type: 'string'
        }, {
            name: 'nativePron',
            type: 'string'
        }, {
            name: 'audioLocation',
            type: 'string'
        }]
    }
})