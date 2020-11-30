// @TODO: YOUR CODE HERE!

// Set up chart
var svgWidth = 960;
var svgHeight = 500;
var margin = {top: 20, right: 40, bottom: 60, left: 100};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select('.chart')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
var chart = svg.append('g');

// Append a div to the body to create tooltips, assign it a class
d3.select(".chart").append("div").attr("class", "tooltip").style("opacity", 0);