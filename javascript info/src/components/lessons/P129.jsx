import Common from '../Common';

export default function P129({ title }) {
    const data = [
        {
            title: title,
            link: 'https://javascript.info/comparison',
            details: [
                {
                    detail: [],
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