// Code not to run unit the document is ready
$(document).ready(function () {
  // variables to interact with the DOM
  var currentDay = $('#currentDay');
  var container = $('.container-lg');

  // variable current, +time, day, and date
  var today = dayjs();
  var dayWeek = today.format('dddd');
  var currentDate = today.format("MMMM D");

  // variables for the work day schedule // for loop create time block with all classes, and buttons, etc.
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  for (var i = 0; i < workHours.length; i++) {
    // The Row in the container variables
    var timeBlock = $('<div>');
    // Part 1 of the Row, the hour variables
    var theHour = $('<div>');
    var hour = dayjs().hour(workHours[i]).format('hA');
    var nowHour = dayjs().hour();
    // Part 2 of the Row, the textarea variables and text from local Storage
    var textArea = $('<textarea>');
    var textInBox = localStorage.getItem(workHours[i]);
    // Part 3 of the Row, the button variables and the save icon
    var button = $('<button>');
    var buttonI = $('<i>');

    // Row Div which will be in 3 parts
    timeBlock.attr('class', 'row time-block');
    // Lets do the colors in the loop too
    if (nowHour > workHours[i]) {
      timeBlock.addClass('past');
    } else if (nowHour === workHours[i]) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    };
    // Part 1 of the row, the time
    theHour.addClass('col-2 col-md-1 hour text-center py-3');
    theHour.html(hour);
    // Part 2 of the row, the textarea
    textArea.addClass('col-8 col-md-10 description');
    textArea.attr('id', workHours[i]);
    textArea.attr('rows', '3');
    // Part 3 of the row, the button. with the Save Icon on the Button
    button.addClass('btn saveBtn col-2 col-md-1');
    button.attr('aria-label', 'save');
    buttonI.addClass('fas fa-save');
    buttonI.attr('aria-hidden', 'true');

    // Append the row to the container
    container.append(timeBlock);
    // Append Part 1 to the row
    timeBlock.append(theHour);
    // Append part 2 to the row, then append text to Part 2
    timeBlock.append(textArea);
    textArea.append(textInBox);
    // Append part 3 to the row, then append the icon to Part 3
    timeBlock.append(button);
    button.append(buttonI);

    // Add margin at the bottom of the page. Added margin to the last string/num in array
    if (workHours[i] == workHours.slice(-1)) {
      timeBlock.css('margin-bottom', '5vh');
    }
  };

  // Save the text to localStorage function with the textarea's ID
  function saveText(event) {
    // event.preventDefault();
    var buttonsText = $(this).siblings('textarea');
    var thisText = buttonsText.val();
    var idOfText = buttonsText.attr('id');
    localStorage.setItem(idOfText, thisText);
  };

  // Call the function when save button is clicked.
  $('button').click(saveText);

  // Add code to display the current date in the header of the page.
  currentDay.text(dayWeek + ", " + currentDate);
});