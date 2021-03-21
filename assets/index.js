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


//store  data to local storage
$(".saveBtn").on("click", function(){
    let activity = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, activity);


// Determine if each row is past, present, or future 
function updateActivity() {
    let currentHour = moment().hours();

    $(".time-block").each(function(){
     let activityHour = parseInt($(this).attr("id").split("-")[1]);

     if (activityHour < currentHour){
        $(this).addClass("past");
     }
     else if (activityHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
     }
     else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
     }
    });
}
updateActivity();
//check if every 15 minutes the activity updates according to time
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
}
