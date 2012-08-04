Ext.define('medApp.model.category', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'categoryName',
            type: 'string'
        }, {
            name: 'categoryId',
            type: 'int'
        }]
    }
})