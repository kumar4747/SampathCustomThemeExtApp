Ext.define('SampathCustomThemeApp.store.Users', {
	extend : 'Ext.data.Store',
	requires:['SampathCustomThemeApp.model.Users'],
	model: 'SampathCustomThemeApp.model.Users',
	storeId : 'users',
  autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'data/users.json',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}
});
