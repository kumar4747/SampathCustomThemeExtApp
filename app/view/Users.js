Ext.define("SampathCustomThemeApp.view.Users", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usersGrid',
    width: '100%',
  	height: '100%',
    id : 'users',
    forceFit: true,
  	initComponent : function() {
  		var me = this;
      me.title = 'Registered Users';
      var store = Ext.create('SampathCustomThemeApp.store.Users');
      var columns = [
        { text : 'Name', dataIndex: 'name'},
        { text : 'Username', dataIndex: 'username'},
        { text : 'Email', dataIndex: 'email'},
        { text : 'Address', dataIndex: 'address'}
      ]
  		Ext.apply(me, {
          store: store,
          columns: columns
  			});
  		me.callParent(arguments);
  	}
});
