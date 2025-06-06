import Common from "../Common";

export default function C1210({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/ifelse",
            details: [
                {
                    detail: [
                        `Sometimes, we need to perform different actions based on different conditions. To do that, we can use the "if" statement and the conditional operator "?".`,
                    ],
                },
            ],
        },
        {
            title: `The “if” statement`,
            link: `https://javascript.info/ifelse#the-if-statement`,
            details: [
                {
                    detail: [
                        `The if statement checks a condition inside parentheses. If the condition is true, it runs the code inside curly braces.`,
                        `Always use curly braces, even for a single line of code, to make your code easier to read.`,
                    ],
                    code: [
                        `let year = 2025;`,
                        `if (year == 2015) alert( 'You are right!' ); // no curly braces`,
                        ``,
                        `if (year == 2015) {`,
                        `  alert( "That's correct!" );`,
                        `  alert( "You're so smart!" );`,
                        `}`,
                    ],
                },
            ],
        },
        {
            title: `Boolean conversion`,
            link: `https://javascript.info/ifelse#boolean-conversion`,
            details: [
                {
                    detail: [
                        `The if statement checks the value inside its parentheses and turns it into true or false.`,
                        `Values like 0, "", null, undefined, and NaN become false — these are called falsy values.`,
                        `All other values become true — these are called truthy values.`,
                        `We can also pass a pre-evaluated boolean value to if, like this:`,
                    ],
                    code: [
                        `let cond = (year == 2015); // equality evaluates to true or false`,
                        ``,
                        `if (cond) {`,
                        `  ...`,
                        `}`,
                    ],
                    noRun: true,
                },
            ],
        },
        {
            title: `The “else” clause`,
            link: `https://javascript.info/ifelse#the-else-clause`,
            details: [
                {
                    detail: [
                        `An if statement can have an optional else block. It runs when the condition is false.`,
                    ],
                    code: [
                        `let age = 16;`,
                        ``,
                        `if (age >= 18) {`,
                        `   alert("Adult");`,
                        `} else {`,
                        `   alert("Minor");`,
                        `}`,
                    ],
                },
            ],
        },
        {
            title: `Several conditions: “else if”`,
            link: `https://javascript.info/ifelse#several-conditions-else-if`,
            details: [
                {
                    detail: [
                        `Use else if to check multiple conditions.`,
                        `JavaScript checks conditions one by one from top to bottom.`,
                        `If age < 13 is false, it checks age < 18. If all are false, it runs the last else block.`,
                        `You can use as many else if blocks as needed. The final else is optional.`,
                    ],
                    code: [
                        `let age = 20;`,
                        ``,
                        `if (age < 13) {`,
                        `   alert( 'Child' );`,
                        `} else if (age > 18) {`,
                        `   alert( 'Teen' );`,
                        `} else {`,
                        `   alert( 'Adult' );`,
                        `}`,
                    ],
                },
            ],
        },
        {
            title: `Conditional operator ‘?’`,
            link: `https://javascript.info/ifelse#conditional-operator`,
            details: [
                {
                    detail: [
                        `Sometimes, we need to assign a variable depending on a condition.`,
                        ``,
                        ``,
                    ],
                    code: [
                        `let accessAllowed;`,
                        `let age = prompt('How old are you?', '');`,
                        ``,
                        `if (age > 18) {`,
                        `  accessAllowed = true;`,
                        `} else {`,
                        `  accessAllowed = false;`,
                        `}`,
                        ``,
                        `alert(accessAllowed);`,
                    ],
                },
                {
                    detail: [
                        `The conditional or ternary operator ? lets us write conditions more concisely. It’s called "ternary" because it has three parts: a condition, a value if true, and a value if false.`,
                    ],
                    code: [
                        `let result = condition ? value1 : value2; // true value1 or false value2`,
                        `let accessAllowed = (age > 18) ? true : false;`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >. For readability use parentheses.`,
                    ],
                    important: [
                        {
                            title: "Please note:",
                            details: [
                                {
                                    detail: [
                                        `In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:`,
                                    ],
                                    code: [
                                        `// the same`,
                                        `let accessAllowed = age > 18;`,
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
            title: `Multiple ‘?’`,
            link: `https://javascript.info/ifelse#multiple`,
            details: [
                {
                    detail: [
                        `A sequence of question mark operators ? can return a value that depends on more than one condition.`,
                    ],
                    code: [
                        `let age = prompt('age?', 18);`,
                        ``,
                        `let message = (age < 3) ? 'Hi, baby!' :`,
                        `  (age < 18) ? 'Hello!' :`,
                        `  (age < 100) ? 'Greetings!' :`,
                        `  'What an unusual age!';`,
                        ``,
                        `alert( message );`,
                    ],
                },
                {
                    detail: [
                        `The ternary operator might be confusing at first, but it’s just a series of checks. Here’s how it works:`,
                        `💠 The first ? checks age < 3. If true, it returns 'Hi, baby!'.`,
                        `💠 If not, it checks age < 18. If true, it returns 'Hello!'.`,
                        `💠 If that’s false, it checks age < 100. If true, it returns 'Greetings!'.`,
                        `💠 If all checks fail, it returns 'What an unusual age!'.`,
                    ],
                },
            ],
        },
        {
            title: `Non-traditional use of ‘?’`,
            link: `https://javascript.info/ifelse#non-traditional-use-of`,
            details: [
                {
                    detail: [
                        `Sometimes the ? operator is used instead of if, like this:`,
                    ],
                    code: [
                        `let company = prompt('Which company created JavaScript?', '');`,
                        ``,
                        `(company == 'Netscape') ?`,
                        `   alert('Right!') : alert('Wrong.');`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `This runs one of the two alert() calls depending on the condition — but it doesn’t assign a value.`,
                        `Even though this is shorter than using if, it’s not recommended. It makes code harder to read, especially when it spans a single long line.`,
                        `Here’s the better version using if:`,
                    ],
                    code: [
                        `let company = prompt('Which company created JavaScript?', '');`,
                        ``,
                        `if (company == 'Netscape') {`,
                        `  alert('Right!');`,
                        `} else {`,
                        `  alert('Wrong.');`,
                        `}`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `Use ? only when you need to return a value, not to run different code blocks. Use if when you're performing different actions.`,
                    ],
                },
            ],
        },
        {
            title: `Tasks`,
            link: `https://javascript.info/ifelse#tasks`,
        },
        {
            title: `if (a string with zero)`,
            link: `https://javascript.info/ifelse#if-a-string-with-zero`,
            details: [
                {
                    detail: [`Will alert be shown?`],
                    code: [
                        `// The answer is Yes, because it's a string not 0.`,
                        `if ("0") {`,
                        `  alert( 'Hello' );`,
                        `}`,
                    ],
                },
            ],
        },
        {
            title: `The name of JavaScript`,
            link: `https://javascript.info/ifelse#the-name-of-javascript`,
            details: [
                {
                    detail: [
                        `Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’`,
                        `If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”`,
                    ],
                    code: [
                        `// Answer`,
                        `let name = prompt("What is the 'official' name of JavaScript?", '');`,
                        ``,
                        `if (name == "ECMAScript") {`,
                        `   alert("Right!");`,
                        `} else {`,
                        `    alert("You don't know? ECMAScript!");`,
                        `}`,
                    ],
                },
            ],
        },
        {
            title: `Show the sign`,
            link: `https://javascript.info/ifelse#show-the-sign`,
            details: [
                {
                    detail: [
                        `Using if..else, write the code which gets a number via prompt and then shows in alert:`,
                        `💠 1, if the value is greater than zero,`,
                        `💠 -1, if less than zero,`,
                        `💠 0, if equals zero.`,
                        `In this task we assume that the input is always a number.`,
                    ],
                    code: [
                        `// Answer`,
                        `let value = prompt('Enter a Number . . .', 0);`,
                        ``,
                        `if (value > 0) {`,
                        `   alert(1);`,
                        `} else if (value < 0) {`,
                        `   alert(-1);`,
                        `} else {`,
                        `   alert(0);`,
                        `};`,
                    ],
                },
            ],
        },
        {
            title: `Rewrite 'if' into '?'`,
            link: `https://javascript.info/ifelse#rewrite-if-into`,
            details: [
                {
                    detail: [
                        `Rewrite this if using the conditional operator '?':`,
                    ],
                    code: [
                        `let result;`,
                        ``,
                        `if (a + b < 4) {`,
                        `  result = 'Below';`,
                        `} else {`,
                        `  result = 'Over';`,
                        `}`,
                    ],
                    noRun: true,
                },
                {
                    code: [
                        `// Answer`,
                        `let result = (a + b < 4) ? 'Below' : 'Over';`,
                    ],
                    noRun: true,
                },
            ],
        },
        {
            title: `Rewrite 'if..else' into '?'`,
            link: `https://javascript.info/ifelse#rewrite-if-else-into`,
            details: [
                {
                    detail: [
                        `Rewrite if..else using multiple ternary operators '?'.`,
                        `For readability, it’s recommended to split the code into multiple lines.`,
                    ],
                    code: [
                        `let message;`,
                        ``,
                        `if (login == 'Employee') {`,
                        `  message = 'Hello';`,
                        `} else if (login == 'Director') {`,
                        `  message = 'Greetings';`,
                        `} else if (login == '') {`,
                        `  message = 'No login';`,
                        `} else {`,
                        `  message = '';`,
                        `}`,
                    ],
                    noRun: true,
                },
                {
                    code: [
                        `// Answer`,
                        `let message = (login == 'Employee') ? 'Hello' :`,
                        `(login == 'Director') ? 'Greetings' :`,
                        `(login == '') ? 'No login' :`,
                        `'';`,
                    ],
                    noRun: true,
                },
            ],
        },
    ];

    return <Common data={data} />;
}
