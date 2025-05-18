import Common from "../Common";

export default function C1212({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/nullish-coalescing-operator",
            details: [
                {
                    detail: [
                        `The ?? operator returns the first value that is not null or undefined.`,
                        `In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.`,
                        `The common use case for ?? is to provide a default value.`,
                        `For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:`,
                    ],
                    code: [
                        `let user = "John";`,
                        ``,
                        `alert(user ?? "Anonymous"); // John (user is not null/undefined)`,
                    ],
                },
                {
                    detail: [
                        `We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.`,
                    ],
                    code: [
                        `let firstName = null;`,
                        `let lastName = null;`,
                        `let nickName = "Supercoder";`,
                        ``,
                        `// shows the first defined value:`,
                        `alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder`,
                    ],
                },
            ],
        },
        {
            title: `Comparison with ||`,
            link: `https://javascript.info/nullish-coalescing-operator#comparison-with`,
            details: [
                {
                    detail: [
                        `The || operator can be used similarly to ?? and often gives the same result.`,
                        `The || operator has been in JavaScript since the beginning, and developers used it to set default values.`,
                        `However, ?? was introduced later because || treats more values (like false, 0, "") as falsy.`,
                        `💠 || returns the first truthy value.`,
                        `💠 ?? returns the first defined value (not null or undefined).`,
                        `So, use ?? when you only want to treat null or undefined as “missing,” not 0, false, or "".`,
                        `For example:`,
                    ],
                    code: [
                        `let height = 0;`,
                        ``,
                        `alert(height || 100); // 100`,
                        `alert(height ?? 100); // 0`,
                    ],
                },
                {
                    detail: [
                        `💠 height || 100 returns 100 because 0 is falsy.`,
                        `💠 height ?? 100 returns 0 because it’s not null or undefined.`,
                        `In practice, 0 is often a valid value (like height), so ?? is more appropriate here.`,
                    ],
                },
            ],
        },
        {
            title: `Precedence`,
            link: `https://javascript.info/nullish-coalescing-operator#precedence`,
            details: [
                {
                    detail: [
                        `The ?? operator has the same precedence as ||. It’s evaluated after most arithmetic operators like * or +, but before = or ?.`,
                        `So, use parentheses when combining ?? with *, +, etc. Without parentheses, the expression would evaluate incorrectly.`,
                    ],
                    code: [
                        `let height = null;`,
                        `let width = null;`,
                        ``,
                        `// important: use parentheses`,
                        `let area = (height ?? 100) * (width ?? 50);`,
                        ``,
                        `alert(area); // 5000`,
                    ],
                },
            ],
        },
        {
            title: `Using ?? with && or ||`,
            link: `https://javascript.info/nullish-coalescing-operator#using-with-or`,
            details: [
                {
                    detail: [
                        `JavaScript doesn’t allow mixing ?? with || or && without parentheses, for safety reasons.`,
                        ``,
                        ``,
                    ],
                    code: [
                        `let x = 1 && 2 ?? 3; // ❌ Syntax Error`,
                        ``,
                        `let x = (1 && 2) ?? 3; // ✅ Works`,
                        `alert(x); // 2`,
                    ],
                    noRun: true,
                },
            ],
        },
        {
            title: `Summary`,
            link: `https://javascript.info/nullish-coalescing-operator#summary`,
            details: [
                {
                    detail: [
                        `💠 The nullish coalescing operator ?? lets you quickly choose the first “defined” value. It’s used to assign default values to variables:`,
                    ],
                    code: [
                        `// set height=100, if height is null or undefined`,
                        `height = height ?? 100;`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `💠 The ?? operator has low precedence—just above ? and =—so add parentheses when combining it with other operations to avoid unexpected results.`,
                        `💠 It’s forbidden to use it with || or && without explicit parentheses.`,
                    ],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
