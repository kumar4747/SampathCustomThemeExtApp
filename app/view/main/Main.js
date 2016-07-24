/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SampathCustomThemeApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'SampathCustomThemeApp.view.main.MainController',
        'SampathCustomThemeApp.view.main.MainModel',
        'SampathCustomThemeApp.view.MainContainer'
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'panel',
        /*bind: {
            title: '{name}'
        },*/
        title: 'Sampath Custom Theme App',
        region: 'north',
        width: '100%',
        split: false,
        bodyPadding: '5 5 5 5',
        tbar: [{
            text: 'Registration',
            handler: 'onClickButton'
        },{
          text: 'Company'
        },{
          text: 'Polocy'
        },{
          text: 'Terms'
        },{
          text: 'Country'
        },{
          text: 'State'
        }
      ]
    },{
        region: 'center',
        autoScroll: true,
        items: [{
          xtype: 'mainContainer'
        }]
    }]
});
