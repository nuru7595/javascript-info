import Common from "../Common";

export default function C127({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/type-conversions",
            details: [
                {
                    detail: [
                        `Most of the time, operators and functions automatically convert the values given to them to the right type.`,
                        `For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.`,
                        `There are also cases when we need to explicitly convert a value to the expected type.`,
                    ],
                },
            ],
        },
        {
            title: `String Conversion`,
            link: `https://javascript.info/type-conversions#string-conversion`,
            details: [
                {
                    detail: [
                        `String conversion happens when we need the string form of a value.`,
                        `String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.`,
                        `We can call the String(value) function to convert a value to a string:`,
                    ],
                    code: [
                        `let value = true;`,
                        `alert(typeof value); // boolean`,
                        ``,
                        `value = String(value); // now value is a string "true"`,
                        `alert(typeof value); // string`,
                    ],
                },
            ],
        },
        {
            title: `Numeric Conversion`,
            link: `https://javascript.info/type-conversions#numeric-conversion`,
            details: [
                {
                    detail: [
                        `Numeric conversion in mathematical functions and expressions happens automatically.`,
                        `For example, when division / is applied to non-numbers:`,
                    ],
                    code: [
                        `alert( "6" / "2" ); // 3, strings are converted to numbers`,
                    ],
                },
                {
                    detail: [
                        `We can use the Number(value) function to explicitly convert a value to a number:`,
                    ],
                    code: [
                        `let str = "123";`,
                        `alert(typeof str); // string`,
                        ``,
                        `let num = Number(str); // becomes a number 123`,
                        ``,
                        `alert(typeof num); // number`,
                    ],
                },
                {
                    detail: [
                        `Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.`,
                        `Numeric conversion rules:`,
                    ],
                    code: [
                        `alert( Number("123") ); // 123`,
                        `alert( Number("123z") ); // NaN (error reading a number at "z")`,
                        `alert( Number(true) ); // 1`,
                        `alert( Number(false) ); // 0`,
                        `alert( Number(undefined) ); // NaN`,
                        `alert( Number(null) ); // 0`,
                    ],
                },
            ],
        },
        {
            title: `Boolean Conversion`,
            link: `https://javascript.info/type-conversions#boolean-conversion`,
            details: [
                {
                    detail: [
                        `Boolean conversion is the simplest one.`,
                        `The conversion rule:`,
                        `Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.`,
                        `Other values become true.`,
                    ],
                    code: [
                        `alert( Boolean(1) ); // true`,
                        `alert( Boolean(0) ); // false`,
                        ``,
                        `alert( Boolean("hello") ); // true`,
                        `alert( Boolean("") ); // false`,
                    ],
                    important: [
                        {
                            title: `Please note: the string with zero "0" is true`,
                            details: [
                                {
                                    detail: [
                                        `Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.`,
                                    ],
                                    code: [
                                        `alert( Boolean("0") ); // true`,
                                        `alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)`,
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
            link: `https://javascript.info/type-conversions#summary`,
            details: [
                {
                    detail: [
                        `⬛ The three most widely used type conversions are to string, to number, and to boolean.`,
                        `⚫ String Conversion - Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.`,
                        `⚫ Numeric Conversion - Occurs in math operations. Can be performed with Number(value).`,
                        `⚫ Boolean Conversion - Occurs in logical operations. Can be performed with Boolean(value).`,
                        `⬛ Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:`,
                        `⚫ undefined is NaN as a number, not 0.`,
                        `⚫ "0" and space-only strings like " " are true as a boolean.`,
                    ],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
