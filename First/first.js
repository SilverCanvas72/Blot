// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 100;
const height = 100;

setDocDimensions(width, height);

// store final lines here
const finalLines = [
  
];

// create a polyline
const polyline = [
  [0, 0],
  [0, 100],
  [100, 100],
  [100, 0],
  [10,0],
  [0, 0],
  [10, 100],
  [100, 90],
  [90, 0],
  [1, 10],
  [21, 98.78],
  [98.78, 78.78],
  [78.78, 1.26],
  [3.25, 20],
  [31, 96.2],
  [95.42, 65.78],
  [68.42, 3.78],
  [7, 30],
  [40, 91.95],
  [90, 53.2],  
  [57.42, 8.45],
  [12.9, 41],
  [50, 84.15],  
  [80.5, 40.2],   
  [47.72, 15.45],
  [21.5, 51],
  [57, 74.15],  
  [72.5, 34.2], 
  [40.4, 25.45],
  [29.5, 56.3],
];

//drawLines([
    //[[25, 90], [25,50]]
//])

//drawLines([
      //[[10, 20], [10,75]]
//])

// add the polyline to the final lines
finalLines.push(polyline);

// transform lines using the toolkit
//bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);