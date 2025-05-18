import Common from "../Common";

export default function C113({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/code-editors",
        },

        { title: "IDE", link: "https://javascript.info/code-editors#ide" },
        {
            title: "Lightweight editors",
            link: "https://javascript.info/code-editors#lightweight-editors",
        },
        {
            title: "Let’s not argue",
            link: "https://javascript.info/code-editors#let-s-not-argue",
        },
    ];
    return <Common data={data} />;
}
