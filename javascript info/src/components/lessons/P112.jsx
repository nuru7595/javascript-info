import Common from "../Common";

export default function P112({ title }) {
    const obj = {
        title: title,
        link: "https://javascript.info/manuals-specifications",
        points: [
            {
                point: "Specification",
                link: "https://javascript.info/manuals-specifications#specification",
            },
            {
                point: "Manuals",
                link: "https://javascript.info/manuals-specifications#manuals",
            },
            {
                point: "Compatibility tables",
                link: "https://javascript.info/manuals-specifications#compatibility-tables",
            },
        ],
    };
    return <Common obj={obj} />;
}
