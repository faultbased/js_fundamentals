function monitorCount(rows, columns) {
    return rows * columns;
  }
  //returns the previous function w/ parameters
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);
