import Common from "../Common";

export default function C122({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/structure",
        },
        {
            title: `Statements`,
            link: "https://javascript.info/structure#statements",
            details: [
                {
                    detail: [
                        `Usually, statements are written on separate lines to make the code more readable.`,
                    ],
                    code: [`alert('Hello');`, `alert('World');`],
                },
            ],
        },
        {
            title: `Semicolons`,
            link: "https://javascript.info/structure#semicolon",
            details: [
                {
                    detail: [
                        `A semicolon may be omitted in most cases when a line break exists. Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.`,
                        `This would also work:`,
                    ],
                    code: [`alert('Hello')`, `alert('World')`],
                },
                {
                    detail: [
                        `There are cases when a newline does not mean a semicolon. For example:`,
                    ],
                    code: [`alert(3 +`, `1`, `+ 2)`],
                },
                {
                    detail: [
                        `If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.`,
                    ],
                    code: [`alert("Hello")`, `[1, 2].forEach(alert);`],
                },
                {
                    detail: [
                        `That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.`,
                        `Here’s how the engine sees it:`,
                    ],
                    code: [`alert("Hello")[1, 2].forEach(alert);`],
                },
            ],
        },
        {
            title: `Comments`,
            link: "https://javascript.info/structure#code-comments",
        },
    ];

    return <Common data={data} />;
}
