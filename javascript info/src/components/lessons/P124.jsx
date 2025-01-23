import Common from "../Common";

export default function P124({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/variables",
            details: [{ detail: [`Variables are used to store information.`] }],
        },
        {
            title: `A variable`,
            link: "https://javascript.info/variables#a-variable",
            details: [
                {
                    detail: [
                        `A variable is a “named storage” for data.`,
                        `To create a variable in JavaScript, use the "let" keyword.`,
                        `The statement below creates a variable with the name “message”:`,
                    ],
                    code: [`let message;`],
                    noRun: true,
                },
                {
                    detail: [
                        `Now, we can put some data into it by using the assignment operator =:`,
                    ],
                    code: [
                        `let message;`,
                        ``,
                        `message = 'Hello';`,
                        `// store the string 'Hello' in the variable named message`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `The string is now saved into the memory area associated with the variable. We can access it using the variable name:`,
                    ],
                    code: [
                        `let message;`,
                        `message = 'Hello!';`,
                        ``,
                        `alert(message);`,
                        `// shows the variable content`,
                    ],
                },
                {
                    detail: [
                        `To be concise, we can combine the variable declaration and assignment into a single line:`,
                    ],
                    code: [
                        `let message = 'Hello!';`,
                        `// define the variable and assign the value`,
                        ``,
                        `alert(message);`,
                    ],
                },
                {
                    detail: [
                        `We can also declare multiple variables in one line:`,
                    ],
                    code: [`let user = 'John', age = 25, message = 'Hello';`],
                    noRun: true,
                },
                {
                    detail: [
                        `For the sake of better readability, please use a single line per variable.`,
                        `The multiline variant is a bit longer, but easier to read:`,
                    ],
                    code: [
                        `let user = 'John';`,
                        `let age = 25;`,
                        `let message = 'Hello';`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `Some people also define multiple variables in this multiline style:`,
                    ],
                    code: [
                        `let user = 'John',`,
                        ` age = 25,`,
                        ` message = 'Hello';`,
                    ],
                    noRun: true,
                },
                {
                    detail: [`…Or even in the “comma-first” style:`],
                    code: [
                        `let user = 'John'`,
                        ` , age = 25`,
                        ` , message = 'Hello';`,
                    ],
                    noRun: true,
                },
            ],
        },
        {
            title: `A real-life analogy`,
            link: "https://javascript.info/variables#a-real-life-analogy",
            details: [
                {
                    detail: [
                        `We can change a variable as many times as we want:`,
                    ],
                    code: [
                        `let message;`,
                        ``,
                        `message = 'Hello!';`,
                        ``,
                        `message = 'World!';`,
                        `// value changed`,
                        ``,
                        `alert(message);`,
                    ],
                },
                {
                    detail: [
                        `We can also declare two variables and copy data from one into the other.`,
                    ],
                    code: [
                        `let hello = 'Hello world!';`,
                        ``,
                        `let message;`,
                        ``,
                        `// copy 'Hello world' from hello into message`,
                        `message = hello;`,
                        ``,
                        `// now two variables hold the same data`,
                        `alert(hello);`,
                        `// Hello world!`,
                        `alert(message);`,
                        `// Hello world!`,
                    ],
                },
                {
                    detail: [
                        `A variable should be declared only once.`,
                        `A repeated declaration of the same variable is an error:`,
                    ],
                    code: [
                        `let message = "This";`,
                        ``,
                        `// repeated 'let' leads to an error`,
                        `let message = "That";`,
                        `// SyntaxError: 'message' has already been declared`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `So, we should declare a variable once and then refer to it without let.`,
                    ],
                },
            ],
        },
        {
            title: `Variable naming`,
            link: "https://javascript.info/variables#variable-naming",
            details: [
                {
                    detail: [
                        `There are two limitations on variable names in JavaScript:`,
                        `1. The name must contain only letters, digits, or the symbols $ and _.`,
                        `2. The first character must not be a digit.`,
                        `When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.`,
                        `What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.`,
                        `These names are valid:`,
                    ],
                    code: [
                        `let $ = 1;`,
                        `// declared a variable with the name "$"`,
                        `let _ = 2;`,
                        `// and now a variable with the name "_"`,
                        ``,
                        `alert($ + _); // 3`,
                    ],
                    important: [
                        {
                            title: `Case matters`,
                            details: [
                                {
                                    detail: [
                                        `Variables named "apple" and "APPLE" are two different variables.`,
                                    ],
                                },
                            ],
                        },
                        {
                            title: `Non-Latin letters are allowed, but not recommended`,
                            details: [
                                {
                                    detail: [
                                        `It is possible to use any language, including Cyrillic letters, Chinese logograms and so on, like this:`,
                                    ],
                                    code: [
                                        `let নাম = '...';`,
                                        `let বয়স = '...';`,
                                    ],
                                    noRun: true,
                                },
                                {
                                    detail: [
                                        `Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we’re writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.`,
                                    ],
                                },
                            ],
                        },
                        {
                            title: `Reserved names`,
                            details: [
                                {
                                    detail: [
                                        `There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.`,
                                        `For example: let, class, return, and function are reserved.`,
                                    ],
                                },
                            ],
                        },
                        {
                            title: `An assignment without "use strict"`,
                            details: [
                                {
                                    detail: [
                                        `Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.`,
                                    ],
                                    code: [
                                        `// note: no "use strict" in this example`,
                                        ``,
                                        `num = 5;`,
                                        `// the variable "num" is created if it didn't exist`,
                                        ``,
                                        `alert(num); // 5`,
                                    ],
                                    noRun: true,
                                },
                                {
                                    detail: [
                                        `This is a bad practice and would cause an error in strict mode:`,
                                    ],
                                    code: [
                                        `"use strict";`,
                                        ``,
                                        `num = 5;`,
                                        `// error: num is not defined`,
                                    ],
                                    noRun: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `Constants`,
            link: "https://javascript.info/variables#constants",
            details: [
                {
                    detail: [`Coming Soon . . .`],
                    code: [`Coming Soon . . .`],
                    noRun: true,
                },
                {
                    detail: [`Coming Soon . . .`],
                    code: [`Coming Soon . . .`],
                    noRun: true,
                },
            ],
        },
        {
            title: `Uppercase constants`,
            link: "https://javascript.info/variables#uppercase-constants",
            details: [
                {
                    detail: [`Coming Soon . . .`],
                    code: [`Coming Soon . . .`],
                    noRun: true,
                },
                {
                    detail: [`Coming Soon . . .`],
                    code: [`Coming Soon . . .`],
                    noRun: true,
                },
            ],
        },
        {
            title: `Name things right`,
            link: "https://javascript.info/variables#name-things-right",
            details: [
                {
                    detail: [`Coming Soon . . .`],
                    code: [`Coming Soon . . .`],
                    noRun: true,
                },
                {
                    detail: [`Coming Soon . . .`],
                    code: [`Coming Soon . . .`],
                    noRun: true,
                },
            ],
        },
        {
            title: `Summary`,
            link: `https://javascript.info/variables#summary`,
            details: [
                {
                    detail: [`Coming Soon . . .`],
                },
            ],
        },
        {
            title: `Tasks`,
            link: `https://javascript.info/variables#tasks`,
            details: [
                {
                    detail: [`Coming Soon . . .`],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
