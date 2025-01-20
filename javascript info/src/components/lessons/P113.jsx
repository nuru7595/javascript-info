import Common from "../Common";

export default function P113({ title }) {
    const obj = {
        title: title,
        points: ["IDE", "Lightweight editors", "Let’s not argue"],
    };
    return <Common obj={obj} />;
}
