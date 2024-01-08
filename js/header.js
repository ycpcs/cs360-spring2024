// Basic data types and definitions.
// This file can rely on definitions in AACONFIG-courseInfo.js.

var calendar = [];
var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


////////////////////////////////////////////////////
// Single, Double, and Triple topics are available
// Most course day will just include a single topic
// But sometimes you might need 2 or even 3 topics to
// link to multiple different materials.
////////////////////////////////////////////////////
function Topic(title, link) {
    this.title = title;
    this.link = link;
}

function DoubleTopic(title1, link1, title2, link2) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
}

function TripleTopic(title1, link1, title2, link2, title3, link3) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
    this.title3 = title3;
    this.link3 = link3;
}

function FourTopic(title1, link1, title2, link2, title3, link3, title4, link4) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
    this.title3 = title3;
    this.link3 = link3;
    this.title4 = title4;
    this.link4 = link4;
}

function FiveTopic(title1, link1, title2, link2, title3, link3, title4, link4, title5, link5) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
    this.title3 = title3;
    this.link3 = link3;
    this.title4 = title4;
    this.link4 = link4;
    this.title5 = title5;
    this.link5 = link5;
}

function SixTopic(title1, link1, title2, link2, title3, link3, title4, link4, title5, link5, title6, link6) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
    this.title3 = title3;
    this.link3 = link3;
    this.title4 = title4;
    this.link4 = link4;
    this.title5 = title5;
    this.link5 = link5;
    this.title6 = title6;
    this.link6 = link6;
}

////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Special classes for a range of vacation days
// and post-"Reading Day" final exam days
////////////////////////////////////////////////////
function VacationDays(description, startDate, endDate) {
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
}

function FinalExamDay(section, date) {
    this.section = section;
    this.date = date;
}
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Create objects for Labs and Assignments with
// the following functions.
////////////////////////////////////////////////////
function Lab(title, link) {
    this.title = title;
    this.link = link;
}

// Useful for a numbered lab with a filename following the standard naming
// convention, e.g., "lab04.html", "CS201_Lab04.zip".  The lab description
// page and the file are assumed to be in the same directory as the
// document with the lab table.
function NumberedLab(number, title) {
    this.title = "Lab " + number + ": " + title;
    var numstr = (number < 10 ? "0" : "") + number;
    this.link = "lab" + numstr + ".html";
    var shortCourse = courseInfo.courseName.replace(/:.*$/, '').replace(/ /, '');
    this.file = shortCourse + "_Lab" + numstr + ".zip";
}

// Variation of NumberedLab for labs without a file
function NumberedLabNoFile(number, title) {
    this.title = "Lab " + number + ": " + title;
    var numstr = (number < 10 ? "0" : "") + number;
    this.link = "lab" + numstr + ".html";
}

function Homework(title, link, daysToComplete) {
    this.title = title;
    this.link = link;
    this.daysToComplete = daysToComplete;
}

function Assignment(title, link, daysToComplete) {
    this.title = title;
    this.link = link;
    this.daysToComplete = daysToComplete;
}

function Reading(title) {
    this.title = title;
}

////////////////////////////////////////////////////

function LinkedReading(title, link, author) {
    this.title = title;
    this.link = link;
    this.author = author;
}

////////////////////////////////////////////////////
