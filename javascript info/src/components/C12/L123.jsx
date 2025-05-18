import Common from "../Common";

export default function C123({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/strict-mode",
            details: [
                {
                    detail: [
                        `JavaScript has evolved over time with new features added, while old functionality remained unchanged to avoid breaking existing code.`,
                        `However, this also meant early mistakes in the language persisted.`,
                        `In 2009, ECMAScript 5 (ES5) introduced new features and improved existing ones. To maintain compatibility, these changes are disabled by default and can be enabled with the "use strict" directive.`,
                    ],
                },
            ],
        },
        {
            title: `“use strict”`,
            link: "https://javascript.info/strict-mode#use-strict",
            details: [
                {
                    detail: [
                        `When it is located at the top of a script, the whole script works the “modern” way.`,
                        `For example:`,
                    ],
                    code: [
                        `"use strict";`,
                        ``,
                        `// this code works the modern way`,
                        `. . .`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.`,
                        `Strict mode isn’t enabled here:`,
                    ],
                    code: [
                        `alert("some code");`,
                        `// "use strict" below is ignored--it must be at the top`,
                        ``,
                        `"use strict";`,
                        ``,
                        `// strict mode is not activated`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `There is no directive like "no use strict" that reverts the engine to old behavior.`,
                        `Once we enter strict mode, there’s no going back.`,
                    ],
                },
            ],
        },
        {
            title: `Browser console`,
            link: "https://javascript.info/strict-mode#browser-console",
            details: [
                {
                    detail: [
                        `To use strict in the console you can try press Shift+Enter to input multiple lines, and put use strict on top, like this:`,
                    ],
                    code: [
                        `'use strict'; <Shift+Enter for a newline>`,
                        `// ...your code`,
                        `<Enter to run>`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `In an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper:`,
                    ],
                    code: [
                        `(function() {`,
                        `  'use strict';`,
                        ``,
                        ` // ...your code here...`,
                        `})()`,
                    ],
                    noRun: true,
                },
            ],
        },
        {
            title: `Should we “use strict”?`,
            link: "https://javascript.info/strict-mode#should-we-use-strict",
            details: [
                {
                    detail: [
                        `For now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.`,
                    ],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
