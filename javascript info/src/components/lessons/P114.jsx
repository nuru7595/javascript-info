import Common from "../Common";

export default function P114({ title }) {
    const obj = {
        title: title,
        link: "https://javascript.info/devtools",
        points: [
            {
                point: "Google Chrome",
                link: "https://javascript.info/devtools#google-chrome",
            },
            {
                point: "Firefox, Edge, and others",
                link: "https://javascript.info/devtools#firefox-edge-and-others",
            },
            {
                point: "Safari",
                link: "https://javascript.info/devtools#safari",
            },
        ],
        summary: [
            `Developer tools allow us to see errors, run commands, examine variables, and much more.`,
            `They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).`,
        ],
    };
    return <Common obj={obj} />;
}
