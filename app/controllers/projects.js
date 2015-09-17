import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions:{
		removeMember:function(pid,mid){
			if(!pid || !mid)
				return
			var project=this.get('model').findBy('id',pid);
			var member=project.get('members').findBy('id',mid);
			project.get('members').removeObject(member);
			project.save();
		},
		addMember:function(pid,mid){
			if(!pid || !mid)
				return
			var project=this.get('model').findBy('id',pid);
			var member=project.get('members').findBy('id',mid);
			if(!member){
				member=this.store.recordForId('member',mid);
				project.get('members').pushObject(member);
				project.save();
			}
		}
	}
});
