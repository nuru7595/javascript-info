import Common from "../Common";

export default function C121({ title }) {
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
                    title: `Show an alert`,
                    link: ``,
                    details: [
                        {
                            detail: [
                                `Create a page that shows a message "I'am JavaScript!".`,
                            ],
                        },
                    ],
                },
                {
                    title: `Solution`,
                    details: [
                        {
                            code: [`alert("I'm JavaScript!");`],
                        },
                    ],
                },
                {
                    title: `Show an alert with an external script`,
                    link: ``,
                    details: [
                        {
                            detail: [
                                `Take the solution of the previous task Show an alert. Modify it by extracting the script content into an external file alert.js, residing in the same folder.`,
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    return <Common data={data} />;
}
