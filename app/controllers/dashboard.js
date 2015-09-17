import Ember from 'ember';

export default Ember.ArrayController.extend({

	// a computed property to get data in format needed by graph-component
	graphDataPerPeople:function(){
		var graphData=[];
		if(this.get('content.length')){
			this.get('content').forEach(function(val){
				graphData.push({label:val.get('name'),frequency:val.get('members.length'),tooltip:val.get('members.length')});
			});
		}
		return graphData;
	}.property('content.@each')


});
