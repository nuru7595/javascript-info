import Common from '../Common';

export default function P1212({ title }) {
    const data = [
        {
            title: title,
            link: 'https://javascript.info/nullish-coalescing-operator',
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