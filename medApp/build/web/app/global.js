var PAGES = {
    categoryList: 0,
    termList: 1,
    termDetail: 2
}
var helper = {
    listDisclose: function (list, record) {
        if (list==='category') {
            var termStore = Ext.getStore('terms')
            if (!termStore) {
                Ext.create('medApp.store.terms')
            }
            var categoryId = record.get('categoryId')
            termStore.filter('categoryId', categoryId)
            termStore.onAfter('load', function () {
                Ext.getCmp('termList').setStore(termStore)
                Ext.getCmp('viewPort').setActiveItem(PAGES.termList)
            })
            termStore.load();
        } else if (list==='term') {
            Ext.ComponentQuery.query('termDetail #termTitle')[0].setTitle(record.get('termName'))
            Ext.ComponentQuery.query('termDetail #englishTextLabel')[0].setValue(record.get('englishText'))
            Ext.ComponentQuery.query('termDetail #spanishTextLabel')[0].setValue(record.get('spanishText'))
            Ext.ComponentQuery.query('termDetail #nativeTextLabel')[0].setValue(record.get('nativeText'))
            Ext.ComponentQuery.query('termDetail #nativePronLabel')[0].setValue(record.get('nativePron'))
            // TODO: set handler
//            Ext.ComponentQuery.query('termDetail #recordingButton')[0].setHandler(function () {
//                helper.playAudio(record.get('audioLocation'))
//            })
            Ext.ComponentQuery.query('termDetail #audioLabel')[0].setHtml('<audio controls="controls"><source src="'+record.get('audioLocation') + '"type="audio/mp3"/>Your browser does not support the audio element</audio>')
            Ext.getCmp('viewPort').setActiveItem(PAGES.termDetail)
        }
    }
}