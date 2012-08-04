Ext.define('medApp.controller.basic', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            
        }
    }, 
    launch: function () {
        Ext.create('Ext.Container', {
            id: 'viewPort',
            fullscreen: true,
            layout: 'card',
            activeItem: PAGES.categoryList,
            items: [{
                xclass: 'medApp.view.categoryList'
            }, {
                xclass: 'medApp.view.termList'
            }, {
                xclass: 'medApp.view.termDetail'
            }]
        })
    }
})