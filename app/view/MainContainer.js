Ext.define("SampathCustomThemeApp.view.MainContainer", {
    extend: 'Ext.Container',
    alias: 'widget.mainContainer',
  	width: '100%',
  	height: '100%',
    autoScroll: true,
  	initComponent : function() {
  		var me = this;
  		Ext.apply(me, {
  			layout: {
  				type: 'vbox'
  			},
  			items: [{
          xtype: 'registrationForm',
          flex: 1
        },{
          xtype: 'usersGrid',
          flex: 1
        }]
  		});
  		me.callParent(arguments);
  	}
});
