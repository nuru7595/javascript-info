import Common from "../Common";

export default function P113({ title }) {
    const obj = {
        title: title,
        link: "https://javascript.info/code-editors",
        points: [
            { point: "IDE", link: "https://javascript.info/code-editors#ide" },
            {
                point: "Lightweight editors",
                link: "https://javascript.info/code-editors#lightweight-editors",
            },
            {
                point: "Let’s not argue",
                link: "https://javascript.info/code-editors#let-s-not-argue",
            },
        ],
    };
    return <Common obj={obj} />;
}
