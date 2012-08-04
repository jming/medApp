Ext.define('medApp.view.termList', {
    extend: 'Ext.Panel',
    config: {
        items: [{
            xtype: 'titlebar',
            title: 'Med App',
            docked: 'top',
            items: [{
                xtype: 'button',
                ui: 'back',
                text: 'Back',
                handler: function () {
                    Ext.getCmp('viewPort').setActiveItem(PAGES.categoryList)
                }
            }]
        }, {
            xtype: 'list',
            ui: 'round',
            pinHeaders: false,
            id: 'termList',
            width: '100%',
            height: '100%',
            centered: true,
            indexBar: true,
            emptyText: '</pre><div class="notes-list-empty-text"><center><br>No terms listed for this category.<br></center></div><pre>',
            itemTpl: ['<div>{termName}</div>'],
            onItemDisclosure: function (record) {
                helper.listDisclose('term', record)
            }
        }]
    }

});