// =============== DATE ===============

let newDate = new Date(); // create a date object
console.log(newDate.toString()); // Day-Month-Date-Year HH-MM-SS GMT (Timezone) [" " == "-"]
console.log(newDate.toDateString()); // Day-Month-Date-Year
console.log(newDate.toLocaleString()); // Day/Month/Year, H-MM-SS A/P

// fetch custom date info
let createdDate = new Date(2024, 3, 20); // months start from 0 index
console.log(createdDate.toDateString()); // Sat Apr 20 2024

let dateAndTime = new Date(2019, 6, 4, 5, 7); // can pass time aswell
console.log(dateAndTime.toLocaleString()); // 7/4/2019, 5:07:00 AM

// custom date format
let customDate = new Date("2027-04-20");
console.log(customDate.toLocaleString()); // 4/20/2027, 12:00:00 AM (MM_DD_YY)

// ++++++++++++++++++++++++++++++
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createdDate.getTime()); // compare dates in miliseconds
console.log(Math.round(Date.now() / 1000)); // current date in seconds

// common
let getDates = new Date();
console.log(getDates.getMonth() + 1); // index is 0 but adding +1 makes it start from 1
console.log(getDates.getDay()); // get day (from monday)

// customise format
let newlyCreatedDate = new Date();
newlyCreatedDate.toLocaleString("default", {
  weekday: "long",
});
console.log(newlyCreatedDate);
