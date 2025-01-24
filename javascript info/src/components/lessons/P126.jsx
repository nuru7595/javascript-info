import Common from '../Common';

export default function P126({ title }) {
    const data = [
        {
            title: title,
            link: 'https://javascript.info/alert-prompt-confirm',
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