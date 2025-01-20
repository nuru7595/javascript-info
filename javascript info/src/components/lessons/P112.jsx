import Common from "../Common";

export default function P112({ title }) {
    const obj = {
        title: title,
        points: ["Specification", "Manuals", "Compatibility tables"],
    };
    return <Common obj={obj} />;
}
