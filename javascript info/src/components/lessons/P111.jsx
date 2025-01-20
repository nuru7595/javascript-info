import Common from "../Common";

export default function P111({ title }) {
    const obj = {
        title: title,
        points: [
            "What is JavaScript?",
            "What can in-browser JavaScript do?",
            "What CAN’T in-browser JavaScript do?",
            "What makes JavaScript unique?",
            "Languages “over” JavaScript",
        ],
        summary: [
            `JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.`,
            `Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.`,
            `There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.`,
        ],
    };
    return <Common obj={obj} />;
}
