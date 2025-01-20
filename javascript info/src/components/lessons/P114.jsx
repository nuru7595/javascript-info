import Common from "../Common";

export default function P114({ title }) {
    const obj = {
        title: title,
        points: ["Google Chrome", "Firefox, Edge, and others", "Safari"],
        summary: [
            `Developer tools allow us to see errors, run commands, examine variables, and much more.`,
            `They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).`,
        ],
    };
    return <Common obj={obj} />;
}
