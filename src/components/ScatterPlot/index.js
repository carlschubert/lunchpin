import React, { Component } from 'react';
import * as d3 from 'd3';

export default class ScatterPlot extends Component {
  constructor(props) {
    super(props);
    this.createScatterPlot = this.createScatterPlot.bind(this);
  }

  componentDidMount() {
    this.createScatterPlot();
  }

  componentDidUpdate() {
    this.createScatterPlot();
  }

  createScatterPlot() {
    const data = this.props.venues.map(venue => {
      return [venue.price_level, venue.rating];
    });

    const margin = { top: 20, right: 20, bottom: 20, left: 40 };
    const width = this.props.width - margin.left - margin.right;
    const height = this.props.height - margin.top - margin.bottom;

    const svg = d3
      .select(this.node)
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const xScale = d3.scaleLinear().domain([0, 5]).range([0, width]);

    const yScale = d3.scaleLinear().domain([0, 5]).range([height, 0]);

    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function(d) {
        return (d[0] / 5) * width;
      })
      .attr('cy', function(d) {
        return (d[1] / 5) * height;
      })
      .attr('r', 5);
  }

  render() {
    return (
      <div className='panel panel-default'>
        <svg
          ref={node => {
            this.node = node;
          }}
        />
      </div>
    );
  }
}
