const end = "10 May 2025";
const time = 26;
const doneLesson = 13;
// Values to Update;
const start = "15 January 2025";
const startDate = new Date(start);
const endDate = new Date(end);
let months =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());
let tempDate = new Date(startDate);
tempDate.setMonth(tempDate.getMonth() + months);
if (tempDate > endDate) {
    months--;
    tempDate.setMonth(tempDate.getMonth() - 1);
}
const days = Math.floor((endDate - tempDate) / (1000 * 60 * 60 * 24));
const total = `${months} Month${months !== 1 ? "s" : ""} ${days} Day${
    days !== 1 ? "s" : ""
}`;

const data = [
    {
        title: "Started",
        value: start,
    },
    {
        title: "Last Updated",
        value: end,
    },
    {
        title: doneLesson >= 175 ? "Completed in" : "Ongoing",
        value: total,
    },
    {
        title: "Allocated Time",
        value: `${time} Hours`,
    },
    {
        title: "Progress",
        value: `${doneLesson} / 175 Projects`,
    },
    {
        title: "Status",
        value: doneLesson >= 175 ? "Completed!" : "Running . . .",
    },
    {
        title: "Source",
        value: "Javascript.info",
        link: "https://javascript.info/",
        linkTitle: "Javascript Docs",
    },
];

export default data;
