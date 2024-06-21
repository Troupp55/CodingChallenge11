//U61753810
const data = [100, 420, 230, 850, 560, 925];

const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 500 - margin.left - margin.right;
const barHeight = 20;
const height = (barHeight + 1) * data.length;

const svg = d3.select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([50, width]);

const bar = svg.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", (d, i) => `translate(0,${i * (barHeight + 1)})`);

bar.append("rect")
    .attr("width", 0) // Start with width 0 for transition
    .attr("height", barHeight)
    .attr("fill", "darkcyan") // Changed fill color
    .transition()
    .duration(1000)
    .attr("width", d => x(d));

bar.append("text")
    .attr("x", d => x(d) - 10) // Add margin by subtracting 10
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => d);

bar.on("mouseover", function(event, d) {
    d3.select(this).select("rect").attr("fill", "darkorange"); // Changed hover color
})
.on("mouseout", function(event, d) {
    d3.select(this).select("rect").attr("fill", "darkcyan"); // Changed back to original color
});

