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
