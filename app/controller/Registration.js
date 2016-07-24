Ext.define('SampathCustomThemeApp.controller.Registration', {
    extend: 'Ext.app.Controller',
    views: ['SampathCustomThemeApp.view.Registration'],
    init: function() {
        this.control({
            '#submitButton': { // on Submit button action
                click: this.onSubmit
             },
            '#resetButton': { // on Reset button action
                click : this.onReset
            }
        });
    },
    onSubmit: function(button) {
        var me = button;
		    var isValid = me.up('form').getForm().isValid();
        var formValid = false;
        var pwdField = me.up('form').getForm().findField('password').getValue();
        var confirmPwdField = me.up('form').getForm().findField('confirm-password').getValue();

        if(!isValid){
            Ext.Msg.alert('Alert!','Please fill all the mandatory fields');
        }
        else if(pwdField == ""){
            Ext.Msg.alert('Alert!','Please enter password');
        }
        else if(confirmPwdField != pwdField ){
            Ext.Msg.alert('Passwords does not match!','Please enter a Valid password');
        }else {
            formValid = true;
        }

        if( formValid == true && isValid == true) {
            var uname = me.up('form').getForm().findField('username').getValue();
            Ext.Msg.alert('Welcome Message','Hi ...! '+uname, function(){
                me.up('form').getForm().reset();
            });
        }
    },
    onReset: function(button){
        var me = button;
        me.up('form').getForm().reset();
    }
});
