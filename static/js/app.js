// from data.js
// var tableData = data;


function fillTable(tableData) {
  d3.selectAll("table#ufo-table tbody tr").remove();
  var tbody = d3.select("table#ufo-table tbody");
  tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Initialize using data.js.
fillTable(data);

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = data.filter(input => ("" === inputValue) || (input.datetime === inputValue));
  console.log(filteredData);
  fillTable(filteredData);

});




