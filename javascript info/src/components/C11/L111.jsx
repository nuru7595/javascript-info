import Common from "../Common";

export default function C111({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/intro",
        },
        {
            title: "What is JavaScript?",
            link: "https://javascript.info/intro#what-is-javascript",
        },
        {
            title: "What can in-browser JavaScript do?",
            link: "https://javascript.info/intro#what-can-in-browser-javascript-do",
        },
        {
            title: "What CAN’T in-browser JavaScript do?",
            link: "https://javascript.info/intro#what-can-t-in-browser-javascript-do",
        },
        {
            title: "What makes JavaScript unique?",
            link: "https://javascript.info/intro#what-makes-javascript-unique",
        },
        {
            title: "Languages “over” JavaScript",
            link: "https://javascript.info/intro#languages-over-javascript",
        },
        {
            title: `Summary`,
            link: `https://javascript.info/intro#summary`,
            details: [
                {
                    detail: [
                        `JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.`,
                        `Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.`,
                        `There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.`,
                    ],
                },
            ],
        },
    ];
    return <Common data={data} />;
}
