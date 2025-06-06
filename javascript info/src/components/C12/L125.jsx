import Common from "../Common";

export default function C125({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/types",
            details: [
                {
                    detail: [
                        `There are eight basic data types in JavaScript. We can put any type in a variable.`,
                    ],
                },
            ],
        },
        {
            title: `Number`,
            link: `https://javascript.info/types#number`,
            details: [
                {
                    detail: [
                        `Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: "Infinity", "-Infinity" and "NaN".`,
                        `Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.`,
                        `We can get it as a result of division by zero. Or just reference it directly:`,
                    ],
                    code: [`alert( 1 / 0 );`, `alert( Infinity);`],
                },
                {
                    detail: [
                        `NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation. NaN is sticky. Any further mathematical operation on NaN returns NaN:`,
                    ],
                    code: [
                        `alert( "not a number" / 2 ); // NaN`,
                        `alert( NaN + 1 ); // NaN`,
                        `alert( 3 * NaN ); // NaN`,
                        `alert( "not a number" / 2 - 1 ); // NaN`,
                    ],
                },
                {
                    detail: [
                        `So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).`,
                    ],
                    important: [
                        {
                            title: `Mathematical operations are safe`,
                            details: [
                                {
                                    detail: [
                                        `Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.`,
                                        `The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `BigInt`,
            link: `https://javascript.info/types#bigint-type`,
            details: [
                {
                    detail: [
                        `In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.`,
                        `BigInt type was recently added to the language to represent integers of arbitrary length.`,
                        `A BigInt value is created by appending n to the end of an integer:`,
                    ],
                    code: [
                        `const num = 1234567890123456789012345678901234567890n;`,
                        `alert(typeof(num));`,
                    ],
                },
            ],
        },
        {
            title: `String`,
            link: `https://javascript.info/types#string`,
            details: [
                {
                    detail: [
                        `A string in JavaScript must be surrounded by quotes. In JavaScript, there are 3 types of quotes.`,
                        `1. Double quotes: "Hello".`,
                        `2. Single quotes: 'Hello'.`,
                        "3. Backticks: `Hello`.",
                        `Double and single quotes are “simple” quotes.`,
                        "Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:",
                        ``,
                    ],
                    code: [
                        `let name = "John";`,
                        ``,
                        `// embed a variable`,
                        "alert( `Hello, ${name}!` ); // Hello, John!",
                        ``,
                        `// embed an expression`,
                        "alert( `the result is ${1 + 2}` ); // the result is 3",
                    ],
                    important: [
                        {
                            title: `There is no character type.`,
                            details: [
                                {
                                    detail: [
                                        `In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.`,
                                        `In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `Boolean (logical type)`,
            link: `https://javascript.info/types#boolean-logical-type`,
            details: [
                {
                    detail: [
                        `The boolean type has only two values: true and false.`,
                        `This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.`,
                        `Boolean values also come as a result of comparisons:`,
                    ],
                    code: [
                        `let isGreater = 4 > 1;`,
                        ``,
                        `alert( isGreater ); // true (the comparison result is "yes")`,
                    ],
                },
            ],
        },
        {
            title: `The “null” value`,
            link: `https://javascript.info/types#the-null-value`,
            details: [
                {
                    detail: [
                        `The special null value forms a separate type of its own which contains only the null value.`,
                        `It’s just a special value which represents “nothing”, “empty” or “value unknown”.`,
                    ],
                },
            ],
        },
        {
            title: `The “undefined” value`,
            link: `https://javascript.info/types#the-undefined-value`,
            details: [
                {
                    detail: [
                        `The special value undefined also stands apart. It makes a type of its own, just like null.`,
                        `The meaning of undefined is “value is not assigned”.`,
                        `If a variable is declared, but not assigned, then its value is undefined.`,
                        `Technically, it is possible to explicitly assign undefined to a variable:`,
                    ],
                    code: [
                        `let age = 100;`,
                        ``,
                        `// change the value to undefined`,
                        `age = undefined;`,
                        ``,
                        `alert(age); // "undefined"`,
                    ],
                },
                {
                    detail: [
                        `But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.`,
                    ],
                },
            ],
        },
        {
            title: `Objects and Symbols`,
            link: `https://javascript.info/types#objects-and-symbols`,
            details: [
                {
                    detail: [
                        `The object type is special.`,
                        `All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.`,
                        `The symbol type is used to create unique identifiers for objects.`,
                    ],
                },
            ],
        },
        {
            title: `The typeof operator`,
            link: `https://javascript.info/types#type-typeof`,
            details: [
                {
                    detail: [
                        `The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.`,
                        `A call to typeof x returns a string with the type name:`,
                    ],
                    code: [
                        `typeof undefined // "undefined"`,
                        ``,
                        `typeof 0 // "number"`,
                        ``,
                        `typeof 10n // "bigint"`,
                        ``,
                        `typeof true // "boolean"`,
                        ``,
                        `typeof "foo" // "string"`,
                        ``,
                        `typeof Symbol("id") // "symbol"`,
                        ``,
                        `typeof Math // "object"  (1)`,
                        ``,
                        `typeof null // "object"  (2)`,
                        ``,
                        `typeof alert // "function"  (3)`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `The last three lines may need additional explanation:`,
                        `(1) Math is a built-in object that provides mathematical operations.`,
                        `(2) The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.`,
                        `(3) The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.`,
                    ],
                    important: [
                        {
                            title: `The typeof(x) syntax`,
                            details: [
                                {
                                    detail: [
                                        `You may also come across another syntax: typeof(x). It’s the same as typeof x.`,
                                        `To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.`,
                                        `Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it.`,
                                        `Some people prefer typeof(x), although the typeof x syntax is much more common.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `Summary`,
            link: `https://javascript.info/types#summary`,
            details: [
                {
                    detail: [
                        `There are 8 basic data types in JavaScript.`,
                        `⚫ Seven primitive data types:`,
                        `1. "number" for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).`,
                        `2. "bigint" for integer numbers of arbitrary length.`,
                        `3. "string" for strings. A string may have zero or more characters, there’s no separate single-character type.`,
                        `4. "boolean" for true/false.`,
                        `5. "null" for unknown values – a standalone type that has a single value null.`,
                        `6. "undefined" for unassigned values – a standalone type that has a single value undefined.`,
                        `7. "symbol" for unique identifiers.`,
                        `⚫ And one non-primitive data type:`,
                        `8. "object" for more complex data structures.`,
                        `⬛ The typeof operator allows us to see which type is stored in a variable.`,
                        `Usually used as typeof x, but typeof(x) is also possible.`,
                        `Returns a string with the name of the type, like "string".`,
                        `For null returns "object" – this is an error in the language, it’s not actually an object.`,
                    ],
                },
            ],
        },
        {
            title: `Tasks`,
            link: `https://javascript.info/types#tasks`,
            details: [
                {
                    title: `String quotes`,
                    link: `https://javascript.info/types#string-quotes`,
                    details: [
                        {
                            detail: [`What is the output of the script?`],
                            code: [
                                `let name = "Ilya";`,
                                ``,
                                "alert( `hello ${1}` ); // ?",
                                ``,
                                'alert( `hello ${"name"}` ); // ?',
                                ``,
                                "alert( `hello ${name}` ); // ?",
                            ],
                            noRun: true,
                        },
                    ],
                },
                {
                    title: `Solution`,
                    details: [
                        {
                            code: [
                                `let name = "Ilya";`,
                                ``,
                                "alert( `hello ${1}` ); // hello 1",
                                ``,
                                'alert( `hello ${"name"}` ); // hello name',
                                ``,
                                "alert( `hello ${name}` ); // hello Ilya",
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
