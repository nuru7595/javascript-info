import Common from "../Common";

export default function C1214({ title }) {
    const data = [
        {
            title: title,
            link: 'https://javascript.info/switch',
            details: [
                {
                    detail: [`A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.`],
                },
            ],
        },
    ];

    return <Common data={data} />;
}