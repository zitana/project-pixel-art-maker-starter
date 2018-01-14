//Define constants
const canvas = $('#pixel_canvas');
const colorPicker = $('#colorPicker');
const sizePicker = $('#sizePicker');
const eraser = $('img');
//Define variables
var color = colorPicker.val();

//Add event listeners
addEventListeners();

//Define makeGrid function
function makeGrid() {
  let height, width;
  height = $('#input_height').val();
  width = $("#input_width").val();
  //Clear previouas table
  canvas.children().remove();
  //Create the table
  for (var rows = 0; rows < height; rows++) {
    canvas.append('<tr></tr>')
    for (var columns = 0; columns < width; columns++) {
      $('tr').last().append('<td></td>');
    }
  }
};

//Gather all event listeners in one method
function addEventListeners() {
  //Create grid with given height and width
  sizePicker.submit(function(e) {
    e.preventDefault();
    makeGrid();
  });
  //Change color when new color is selected on the colorPicker
  colorPicker.change(function () {
    color = colorPicker.val();
  });
  colorPicker.on('click' , function () {
    color = colorPicker.val();
  });
  //Switch color to white when eraser image is clicked
  eraser.on('click' , function () {
    color = '#ffffff';
  });
  //Change background color of cell when clicked
  canvas.on('click', 'td', function() {
    $(this).css('background', color);
  });
}
