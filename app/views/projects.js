import Ember from 'ember';

export default Ember.View.extend({
	setDragAndDropForRemoveMember:function(){
		this.$().find('#leftCol').on('dragover',function(event){
			event.preventDefault();
		});
		this.$().find('#leftCol').on('drop',$.proxy(function(event){
			console.log(event);
			var pid=event.dataTransfer.getData('data-pid');
			var mid=event.dataTransfer.getData('data-mid');
			this.get('controller').send('removeMember',pid,mid);
		},this));
		this.$().find('.inProjectMembers').on('dragstart',function(event){
			console.log(event);
			event.dataTransfer.setData('data-mid',event.target.getAttribute('data-mid'));
			event.dataTransfer.setData('data-pid',event.target.getAttribute('data-pid'));
		});
	}.on('didInsertElement'),
	setDragAndDropToAddMember:function(){
		this.$().find('.project-tile').on('dragover',function(event){
			event.preventDefault();
		});
		this.$().find('.project-tile').on('drop',$.proxy(function(event){
			console.log(event);
			var pid=event.currentTarget.getAttribute('data-pid');
			var mid=event.dataTransfer.getData('data-mid');
			this.get('controller').send('addMember',pid,mid);
		},this));
		this.$().find('.members-list').on('dragstart',function(event){
			console.log(event);
			event.dataTransfer.setData('data-mid',event.target.getAttribute('data-mid'));
		});
	}.on('didInsertElement')
});
