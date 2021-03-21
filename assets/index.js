$(document).ready(function () {
    // Hours of the day variable
    let workHours = ["9:00 am","10:00 am","11:00 am", "12:00 pm", "1:00 pm","2:00 pm","3:00 pm","4:00 pm","5:00 pm"];

// displays current day
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// Moment.js to get the current date and time
    let now = new Date().getHours();


//store  data to local storage
$(".saveBtn").on("click", function(){
    let activity = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, activity);
});

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
let interval = setInterval(updateActivity, 1000);
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

});

