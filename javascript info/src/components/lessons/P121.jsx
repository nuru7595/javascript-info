import Common from "../Common";

export default function P121({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/hello-world",
        },
        {
            title: `The “script” tag`,
            link: "https://javascript.info/hello-world#the-script-tag",
        },
        {
            title: `Modern markup`,
            link: "https://javascript.info/hello-world#modern-markup",
        },
        {
            title: `External scripts`,
            link: "https://javascript.info/hello-world#external-scripts",
        },
        {
            title: `Summary`,
            link: `https://javascript.info/hello-world#summary`,
            details: [
                {
                    detail: [
                        `We can use a <script> tag to add JavaScript code to a page.`,
                        `The type and language attributes are not required.`,
                        `A script in an external file can be inserted with <script src="path/to/script.js"></script>.`,
                    ],
                },
            ],
        },
        {
            title: `Tasks`,
            link: `https://javascript.info/hello-world#tasks`,
            details: [
                {
                    title: ``,
                    detail: [
                        `Show an alert`,
                        `Create a page that shows a message "I'am JavaScript!".`,
                    ],
                    code: [`alert("I'm JavaScript!");`],
                },
                {
                    detail: [
                        `Show an alert with an external script`,
                        `Take the solution of the previous task Show an alert. Modify it by extracting the script content into an external file alert.js, residing in the same folder.`,
                    ],
                    code: [`// Nothing Special, Skipped the Task!`],
                    noRun: true,
                },
            ],
        },
    ];
    return <Common data={data} />;
}
