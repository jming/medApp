Ext.define('medApp.store.categories', {
    extend: 'Ext.data.Store',
    config: {
        model: 'medApp.model.category',
        id: 'categories',
        sorters: 'categoryName',
        grouper: function (record) {
            return record.get('categoryName')[0];
        },
        data: [{
            categoryName: 'A Cat',
            categoryId: 0
        }, {
            categoryName: 'B Cat',
            categoryId: 1
        }, {
            categoryName: 'C Cat',
            categoryId: 2
        }, {
            categoryName: 'D Cat',
            categoryId: 3
        }, {
            categoryName: 'E Cat',
            categoryId: 4
        }]
    }
})