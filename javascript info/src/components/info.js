const end = "22 January 2025";
const time = 17;
const doneLesson = 7;
// Values to Update;
const start = "15 January 2025";
const startDate = new Date(start);
const endDate = new Date(end);
const total = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
const data = [
    {
        title: "Started",
        value: start
    }, {
        title: "Last Updated",
        value: end
    }, {
        title: doneLesson >= 175 ? "Completed in" : "Ongoing",
        value: `${total} Days`
    }, {
        title: "Allocated Time",
        value: `${time} Hours`
    }, {
        title: "Progress",
        value: `${doneLesson} / 175 Projects`
    }, {
        title: "Status",
        value: doneLesson >= 175 ? "Completed!" : "Running . . ."
    }, {
        title: "Source",
        value: "Javascript.info",
        link: "https://javascript.info/",
        linkTitle: "Javascript Docs"
    }
];

export default data;