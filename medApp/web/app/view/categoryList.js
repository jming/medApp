Ext.define('medApp.view.categoryList', {
    extend: 'Ext.Panel',
    config: {
        items: [{
            xtype: 'titlebar',
            title: 'Med App',
            docked: 'top'
        }, {
            xtype: 'list',
            ui: 'round',
            pinHeaders: false,
            id: 'categoryList',
            width: '100%',
            height: '100%',
            centered: true,
            indexBar: true,
            emptyText: '</pre><div class="notes-list-empty-text"><center><br>No categories listed.<br></center></div><pre>',
            itemTpl: ['<div>{categoryName}</div>'],
            store: 'categories',
            onItemDisclosure: function (record) {
                helper.listDisclose('category', record)
            }
        }]
    }

});