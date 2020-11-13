$(document).ready(function)(){
var table = new Tabulator("#example-table", {
height:"311px",
responsiveLayout:"hide",
columns:[
{title:"Function", field:"Function", sorter:"Text", hozAlign:"center"},
{title:"Definition", field:"definition"hozAlign:"center"},
{title:"Legacy", field:"Modern", hozAlign:"center"},
{title:"Hybrid", field:"Modern", hozAlign:"center"},
{title:"Modern", field:"Modern", hozAlign:"center"},
],
});
}