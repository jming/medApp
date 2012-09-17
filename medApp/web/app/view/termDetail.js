Ext.define('medApp.view.termDetail', {
    extend: 'Ext.Panel',
    alias: 'widget.termDetail',
    id: 'termDetail',
    config: {
        items: [{
            xtype: 'titlebar',
            title: 'Med App',
            itemId: 'termTitle',
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
            xtype: 'container',
            padding: '10px',
            items: [{
                xtype: 'fieldset',
                config: {
                    labelAlign: 'top',
                    disabled: true
                },
                items: [{
                    xtype: 'textfield',
                    label: 'English',
                    itemId: 'englishTextLabel'
                }, {
                    xtype: 'textfield',
                    label: 'Spanish',
                    itemId: 'spanishTextLabel'
                }, {
                    xtype: 'textfield',
                    label: 'Native',
                    itemId: 'nativeTextLabel'
                }, {
                    xtype: 'textfield',
                    label: 'Pronunciation',
                    itemId: 'nativePronLabel'
                }]
            }, 
//                {
//                    xtype: 'container',
//                    itemId: 'audioContainer',
//                    padding: '20px',
//                    items: [{
//                        xtype: 'button',
//                        text: 'Play recording',
//                        itemId: 'recordingButton',
//                        // action: 'playRecording'
//                    }]
//                }
            {
                xtype: 'label',
                itemId: 'audioLabel'
            }]
        }]
    }
})