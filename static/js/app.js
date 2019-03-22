// from data.js
// data load (json)
var tableData = data;
// html controls to read
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");


// initial load of data
data.forEach(function(ufoData){
    var ufoRow = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]){
        var ufoCell = ufoRow.append("td");
        ufoCell.text(value);

    })
})
// event listener setup
button.on("click", handleClick);

// function to handle button click
function handleClick(){
    // prevent console and page reload
    d3.event.preventDefault();
    // clear existing records
    tbody.html("");

    // function to grab filtered data
    var inputElement=d3.select("#datetime");
    var inputDate=inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    console.log(filteredData);

    // load filtered data
    filteredData.forEach(function(fData){
        var ufoRow = tbody.append("tr");
    
        Object.entries(fData).forEach(function([key, value]){
            var fCell = tbody.append("td");
            fCell.text(value);
    
        })
    })

   
}
