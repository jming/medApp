Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'medApp',
    controllers: ['basic'],
    views: ['categoryList', 'termList', 'termDetail'],
    models: ['category', 'term'],
    stores: ['categories', 'terms'],
    launch: function () {
        Ext.create('medApp.view.categoryList');
    }
});