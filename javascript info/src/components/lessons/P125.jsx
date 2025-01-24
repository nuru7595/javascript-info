import Common from '../Common';

export default function P125({ title }) {
    const data = [
        {
            title: title,
            link: 'https://javascript.info/types',
            details: [
                {
                    detail: [``],
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