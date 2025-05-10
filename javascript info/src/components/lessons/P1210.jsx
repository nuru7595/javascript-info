import Common from '../Common';

export default function P1210({ title }) {
    const data = [
        {
            title: title,
            link: 'https://javascript.info/ifelse',
            details: [
                {
                    detail: [`Sometimes, we need to perform different actions based on different conditions.`],
                    code: [
                        `Up Next . . .`, `Up Next . . .`,
                    ],
                    noRun: true,
                },
            ],
        },
    ];

    return <Common data={data} />;
}