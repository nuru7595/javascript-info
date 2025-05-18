import Common from "../Common";

export default function C114({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/devtools",
        },
        {
            title: "Google Chrome",
            link: "https://javascript.info/devtools#google-chrome",
        },
        {
            title: "Firefox, Edge, and others",
            link: "https://javascript.info/devtools#firefox-edge-and-others",
        },
        {
            title: "Safari",
            link: "https://javascript.info/devtools#safari",
        },
        {
            title: `Summary`,
            link: `https://javascript.info/devtools#summary`,
            details: [
                {
                    detail: [
                        `Developer tools allow us to see errors, run commands, examine variables, and much more.`,
                        `They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).`,
                    ],
                },
            ],
        },
    ];
    return <Common data={data} />;
}
