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
            categoryName: 'Cardiac Exam',
            categoryId: 0
        }, {
            categoryName: 'Neurologic Exam',
            categoryId: 1
        }, {
            categoryName: 'Obstetrical Exam',
            categoryId: 2
        }]
    }
})