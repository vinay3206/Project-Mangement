import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return this.store.createRecord('project');
	},
	setupController:function(controller,model){
		this._super(controller,model);
		this.store.find('member').then(function(members){
			controller.set('listOfmembers',members);
		});
	},
	actions:{
		willTransition:function(){
			this.get('controller.model.isNew') && this.get('controller.model').deleteRecord();
		}
	}
});
