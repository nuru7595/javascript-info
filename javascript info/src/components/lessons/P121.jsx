import Common from "../Common";

export default function P121({ title }) {
    const obj = {
        title: title,
        link: "https://javascript.info/hello-world",
        points: [
            {
                point: `The “script” tag`,
                link: "https://javascript.info/hello-world#the-script-tag",
            },
            {
                point: `Modern markup`,
                link: "https://javascript.info/hello-world#modern-markup",
            },
            {
                point: `External scripts`,
                link: "https://javascript.info/hello-world#external-scripts",
            },
        ],
        summary: [
            `We can use a <script> tag to add JavaScript code to a page.`,
            `The type and language attributes are not required.`,
            `A script in an external file can be inserted with <script src="path/to/script.js"></script>.`,
        ],
        tasks: [
            {
                name: `Show an alert`,
                task: `Create a page that shows a message "I'am JavaScript!".`,
                code: [`alert("I'm JavaScript!");`],
            },
            {
                name: `Show an alert with an external script`,
                task: `Take the solution of the previous task Show an alert. Modify it by extracting the script content into an external file alert.js, residing in the same folder.`,
                code: [`// Nothing Special, Skipped the Task!`],
                noRun: true,
            },
        ],
    };
    return <Common obj={obj} />;
}
