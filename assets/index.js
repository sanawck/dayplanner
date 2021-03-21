$(document).ready(function () {
    // Hours of the day variable
    let workHours = ["9:00 am","10:00 am","11:00 am", "12:00 pm", "1:00 pm","2:00 pm","3:00 pm","4:00 pm","5:00 pm",];

// displays current day
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
// For Loop with JQuery draws row hours with assigned classes and IDs
    for (i = 0; i < workHours.length; i++) {
        console.log(workHours[i]);
        $(`<div class="col-2 time-block"></div>`)
            .text(workHours[i])
            .appendTo(".row");
        $(`<textarea class="col-8 note-input" id="input-${i}"></textarea>`)
            .attr("placeholder", "Enter Tasks Here")
            .appendTo(".row");
        $(`<button class="col-2 btn btn-secondary saveBtn" id="hour${i}"></button>`)
            .text("save")
            .appendTo(".row");
    }

// Moment.js to get the current date and time
    let now = new Date().getHours();


});