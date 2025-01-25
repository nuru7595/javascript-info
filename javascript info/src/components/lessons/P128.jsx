import Common from "../Common";

export default function P128({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/operators",
            details: [
                {
                    detail: [
                        `We know many operators from school.`,
                        `In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.`,
                    ],
                    code: [`Up Next . . .`, `Up Next . . .`],
                    noRun: true,
                },
            ],
        },
    ];

    return <Common data={data} />;
}
