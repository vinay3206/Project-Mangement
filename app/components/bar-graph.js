import Ember from 'ember';

export default Ember.Component.extend({

	data:[], // will be set by the user should be an array of objects
			// data should be set in this format {label:"",frequency:1,tootip:''}

    yaxisLabel:'',  // wht text to show on yAxis of graph

    appendTo:'',  // the element selector to attach the graph


// this function is called on didInsertElement to set the graph
	setBarGraph:function(){

		var values=this.get('data');
		var yaxisLabel=this.get('yaxisLabel');
		var appendTo=this.get('appendTo');
								// Generate a Bates distribution of 10 random variables.
		var margin = {top: 40, right: 20, bottom: 30, left: 40},
	    width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;

			var x = d3.scale.ordinal()
			    .rangeRoundBands([0, width], 0.1);

			var y = d3.scale.linear()
			    .range([height, 0]);

			var xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom");

			var yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left").tickFormat(d3.format("d"));

			var tip = d3.tip()
			  .attr('class', 'd3-tip')
			  .offset([-10, 0])
			  .html(function(d) {
			    return "<strong></strong> <span style='color:red'>" + d.tooltip + "</span>";
			  });

			var svg = d3.select(appendTo).append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			svg.call(tip);

			values.forEach(function(val,index,data){
				x.domain(data.map(function(d) { return d.label; }));
			  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

			  svg.append("g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + height + ")")
			      .call(xAxis);

			  svg.append("g")
			      .attr("class", "y axis")
			      .call(yAxis)
			    .append("text")
			      .attr("transform", "rotate(-90)")
			      .attr("y", 6)
			      .attr("dy", ".71em")
			      .style("text-anchor", "end")
			      .text(yaxisLabel);

			  svg.selectAll(".bar")
			      .data(data)
			    .enter().append("rect")
			      .attr("class", "bar")
			      .attr("x", function(d) { return x(d.label); })
			      .attr("width", x.rangeBand())
			      .attr("y", function(d) { return y(d.frequency); })
			      .attr("height", function(d) { return height - y(d.frequency); })
			      .on('mouseover', tip.show)
			      .on('mouseout', tip.hide)

			});

	
	}.on('didInsertElement')

});
