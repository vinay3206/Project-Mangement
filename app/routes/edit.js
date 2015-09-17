import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		return this.store.find('project',params.id);
	},
	afterModel:function(model){
		return model.get('members');
	},
	setupController:function(controller,model){
		this._super(controller,model);
		controller.set('selectedMembers',model.get('members.content.content'));
		this.store.find('member').then(function(members){
			controller.set('listOfmembers',members);
		});
	},
});
