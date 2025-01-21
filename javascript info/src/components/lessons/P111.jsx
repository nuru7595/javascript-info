import Common from "../Common";

export default function P111({ title }) {
    const obj = {
        title: title,
        link: "https://javascript.info/intro",
        points: [
            {
                point: "What is JavaScript?",
                link: "https://javascript.info/intro#what-is-javascript",
            },
            {
                point: "What can in-browser JavaScript do?",
                link: "https://javascript.info/intro#what-can-in-browser-javascript-do",
            },
            {
                point: "What CAN’T in-browser JavaScript do?",
                link: "https://javascript.info/intro#what-can-t-in-browser-javascript-do",
            },
            {
                point: "What makes JavaScript unique?",
                link: "https://javascript.info/intro#what-makes-javascript-unique",
            },
            {
                point: "Languages “over” JavaScript",
                link: "https://javascript.info/intro#languages-over-javascript",
            },
        ],
        summary: [
            `JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.`,
            `Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.`,
            `There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.`,
        ],
    };
    return <Common obj={obj} />;
}
