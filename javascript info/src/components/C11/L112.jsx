import Common from "../Common";

export default function C112({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/manuals-specifications",
        },
        {
            title: "Specification",
            link: "https://javascript.info/manuals-specifications#specification",
        },
        {
            title: "Manuals",
            link: "https://javascript.info/manuals-specifications#manuals",
        },
        {
            title: "Compatibility tables",
            link: "https://javascript.info/manuals-specifications#compatibility-tables",
        },
    ];
    return <Common data={data} />;
}
