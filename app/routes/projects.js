import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return this.store.find('project');

	},
	setupController:function(controller,model){
		this._super(controller,model);
		this.store.find('member').then(function(members){
			controller.set('listOfmembers',members);
		});
	},
	afterModel:function(model){
		var records=JSON.parse(localStorage.getItem('myapp'));
		// add some members in localStorage to initialize it for first time
		if(!records || !records.member){
			this.store.createRecord('member',{
				name:'Vinay Pandey',
				role:'Manager'
			}).save();
			this.store.createRecord('member',{
				name:'Bhoomi Desai',
				role:'Team Lead'
			}).save();
			this.store.createRecord('member',{
				name:'Suniel Sharma',
				role:'Front end Developer'
			}).save();
			this.store.createRecord('member',{
				name:'Shweta Saxena',
				role:'UI developer'
			}).save();
			this.store.createRecord('member',{
				name:'Vijay Pandey',
				role:'Back end Developer'
			}).save();
		}

	}
});
