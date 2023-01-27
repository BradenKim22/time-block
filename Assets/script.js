// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // variables to interact with the DOM
  var currentDay = $('#currentDay');
  var container = $('.container-lg');

  // variable current, +time, day, and date
  var today = dayjs();
  var dayWeek = today.format('dddd');
  var currentDate = today.format("MMMM D");

  // variables for the work day schedule // for loop create time block with all classes, and buttons, etc.
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  // functions for the time block color
  function past() {
    timeBlock.addClass('class', 'past');
  };
  function present() {
    timeBlock.addClass('class', 'present');
  };
  function future() {
    timeBlock.addClass('class', 'future');
  };

  for (var i = 0; i < workHours.length; i++) {
    // The Row in the container variables
    var timeBlock = $('<div>');
    // Part 1 of the Row, the hour variables
    var theHour = $('<div>');
    var hour = dayjs().hour(workHours[i]).format('hA');
    var nowHour = dayjs().hour();
    // Part 2 of the Row, the textarea variables
    var textArea = $('<textarea>');
    // Part 3 of the Row, the button variables and the save icon
    var button = $('<button>');
    var buttonI = $('<i>');

    // Row Div which will be in 3 parts
    timeBlock.attr('id', workHours[i]);
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
    // textArea.attr('row', workHours.length);
    // Part 3 of the row, the button. with the Save Icon on the Button
    button.addClass('btn saveBtn col-2 col-md-1');
    button.attr('aria-label', 'save');
    buttonI.addClass('fas fa-save');
    buttonI.attr('aria-hidden', 'true');

    // Append the row to the container then append all three parts to the row.
    container.append(timeBlock);
    timeBlock.append(theHour);
    timeBlock.append(textArea);
    timeBlock.append(button);
    button.append(buttonI);
  };

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  currentDay.text(dayWeek + ", " + currentDate);

});
