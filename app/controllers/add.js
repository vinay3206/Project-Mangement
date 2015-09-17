import Ember from 'ember';

export default Ember.ObjectController.extend({
	selectedMembers:[],
	actions:{
		save:function(){
			this.set('model.members.content',this.get('selectedMembers'))
			this.get('model').save().then($.proxy(function(){
				this.transitionTo('projects');
			},this));
		}
	}
});
