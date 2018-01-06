// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker").addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
  //Define variables
  const canvas = document.getElementById("pixel_canvas");
  const colorPicker = document.getElementById("colorPicker");
  var height = document.getElementById("input_height").value;
  var width = document.getElementById("input_width").value;
  //Clear previous table
  canvas.innerHTML = "";
  //Create the table
  for (var rows = 0; rows < height; rows++) {
    let row = canvas.insertRow();
    for (var columns = 0; columns < width; columns++) {
      let cell = row.insertCell();
      //Add event listener to each cell
      cell.addEventListener("click", function() {
        cell.style.backgroundColor = colorPicker.value;
      });
    }
  }
};
