Ext.define("SampathCustomThemeApp.view.Registration", {
    extend: 'Ext.form.Panel',
    alias: 'widget.registrationForm',
    width: '100%',
  	height: '100%',
    id : 'registrationForm',
    bodyPadding: '10 10 10 10',
    defaults: {
      anchor: '100%',
      allowBlank: false,
      msgTarget: 'side',
      labelWidth: 120
    },
  	initComponent : function() {
  		var me = this;
  		var requiredMarkerTpl = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
      me.title = 'Registration Form',
  		Ext.apply(me, {
  			layout: {
  				type: 'anchor'
  			},
  			items: [
          {
            xtype: 'textfield',
            name: 'name',
            emptyText: 'Enter your Name',
            afterLabelTextTpl: requiredMarkerTpl,
            fieldLabel: 'Name'
          },{
            xtype: 'textfield',
            name: 'username',
            emptyText: 'Your desired Username',
            afterLabelTextTpl: requiredMarkerTpl,
            fieldLabel: 'Username'
          },{
            xtype: 'textfield',
            name: 'email',
            emptyText: 'Your Email',
            afterLabelTextTpl: requiredMarkerTpl,
            fieldLabel: 'Email'
          },{
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            afterLabelTextTpl: requiredMarkerTpl,
            emptyText: 'Enter Password',
            fieldLabel: 'Password'
          },{
            xtype: 'textfield',
            name: 'confirm-password',
            inputType: 'password',
            afterLabelTextTpl: requiredMarkerTpl,
            emptyText: 'Confirm Password',
            fieldLabel: 'Confirm Password'
          },{
            xtype: 'textareafield',
            name: 'address',
            afterLabelTextTpl: requiredMarkerTpl,
            emptyText: 'Address',
            fieldLabel: 'Address'
          }],
          buttons: [{
                      text: 'Submit',
                      itemId: 'submitButton'
                    },{
                      text: 'Reset',
                      itemId: 'resetButton'
                    }]
  		});

  		me.callParent(arguments);
  	}
});
