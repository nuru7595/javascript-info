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
                },
            ],
        },
        {
            title: `Terms: “unary”, “binary”, “operand”`,
            link: `https://javascript.info/operators#terms-unary-binary-operand`,
            details: [
                {
                    detail: [
                        `An operand – is what operators are applied to. Sometimes, people call these “arguments” instead of “operands”.`,
                    ],
                    code: [
                        `alert( 5 + 2 );`,
                        `// There are 2 operands 5 and 2`,
                    ],
                },
                {
                    detail: [
                        `An operator is unary if it has a single operand.  For example, the unary negation - reverses the sign of a number:`,
                    ],
                    code: [
                        `let x = 1;`,
                        `x = -x;`,
                        `alert( x );`,
                        `// -1, unary negation was applied`,
                    ],
                },
                {
                    detail: [
                        `An operator is binary if it has two operands. The same minus exists in binary form as well:`,
                    ],
                    code: [
                        `let x = 1, y = 3;`,
                        `alert( y - x );`,
                        `// 2, binary minus subtracts values`,
                    ],
                },
                {
                    detail: [
                        `Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.`,
                    ],
                },
            ],
        },
        {
            title: `Maths`,
            link: `https://javascript.info/operators#maths`,
            details: [
                {
                    detail: [
                        `The following math operations are supported:`,
                        `💠 Addition +,`,
                        `💠 Subtraction -,`,
                        `💠 Multiplication *,`,
                        `💠 Division /,`,
                        `💠 Remainder %,`,
                        `💠 Exponentiation **.`,
                    ],
                },
            ],
        },
        {
            title: `Remainder %`,
            link: `https://javascript.info/operators#remainder`,
            details: [
                {
                    detail: [
                        `The result of a % b is the remainder of the integer division of a by b:`,
                    ],
                    code: [`alert( 5 % 2 );`, `// 1, `],
                },
            ],
        },
        {
            title: `Exponentiation **`,
            link: `https://javascript.info/operators#exponentiation`,
            details: [
                {
                    detail: [
                        `The exponentiation operator a ** b raises a to the power of b:`,
                    ],
                    code: [`alert( 2 ** 3 );`, `// 2³ = 8`],
                },
                {
                    detail: [
                        `Just like in maths, the exponentiation operator is defined for non-integer numbers as well.`,
                        `For example, a square root is an exponentiation by ½:`,
                    ],
                    code: [
                        `alert( 4 ** (1/2) );`,
                        `// 2 (power of 1/2 is the same as a square root)`,
                        `alert( 8 ** (1/3) );`,
                        `// 2 (power of 1/3 is the same as a cubic root)`,
                    ],
                },
            ],
        },
        {
            title: `String concatenation with binary +`,
            link: `https://javascript.info/operators#string-concatenation-with-binary`,
            details: [
                {
                    detail: [
                        `Usually, the plus operator + sums numbers.`,
                        `But, if the binary + is applied to strings, it merges (concatenates) them:`,
                    ],
                    code: [
                        `let s = "my" + "String";`,
                        `alert(s);`,
                        `// myString`,
                    ],
                },
                {
                    detail: [
                        `Note that if any of the operands is a string, then the other one is converted to a string too.`,
                    ],
                    code: [
                        `alert( '1' + 2 );`,
                        `// "12"`,
                        `alert( 2 + '1' );`,
                        `// "21"`,
                    ],
                },
                {
                    detail: [
                        `See, it doesn’t matter whether the first operand is a string or the second one.`,
                        `Here’s a more complex example:`,
                    ],
                    code: [`alert(2 + 2 + '1' );`, `// "41" and not "221"`],
                },
                {
                    detail: [
                        `Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.`,
                    ],
                    code: [`alert('1' + 2 + 2);`, `// "122" and not "14"`],
                },
                {
                    detail: [
                        `Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".`,
                        `The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.`,
                        `Here’s the demo for subtraction and division:`,
                    ],
                    code: [
                        `alert( 6 - '2' );`,
                        `// 4, converts '2' to a number`,
                        `alert( '6' / '2' );`,
                        `// 3, converts both operands to numbers`,
                    ],
                },
            ],
        },
        {
            title: `Numeric conversion, unary +`,
            link: `https://javascript.info/operators#numeric-conversion-unary`,
            details: [
                {
                    detail: [
                        `The plus + exists in two forms: the binary form that we used above and the unary form.`,
                        `The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.`,
                        `For example:`,
                    ],
                    code: [
                        `// No effect on numbers`,
                        `let x = 1;`,
                        `alert( +x );`,
                        `// 1`,
                        ``,
                        `let y = -2;`,
                        `alert( +y );`,
                        `// -2`,
                        ``,
                        `// Converts non-numbers`,
                        `alert( +true );`,
                        `// 1`,
                        `alert( +"" );`,
                        `// 0`,
                    ],
                },
                {
                    detail: [
                        `It actually does the same thing as Number(...), but is shorter.`,
                        `The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?`,
                        `The binary plus would add them as strings:`,
                    ],
                    code: [
                        `let apples = "2";`,
                        `let oranges = "3";`,
                        ``,
                        `alert( apples + oranges );`,
                        `// "23", the binary plus concatenates strings`,
                    ],
                },
                {
                    detail: [
                        `If we want to treat them as numbers, we need to convert and then sum them:`,
                    ],
                    code: [
                        `let apples = "2";`,
                        `let oranges = "3";`,
                        ``,
                        `// both values converted to numbers before the binary plus`,
                        `alert( +apples + +oranges );`,
                        `// 5`,
                        ``,
                        `// the longer variant`,
                        `// alert( Number(apples) + Number(oranges) ); // 5`,
                    ],
                },
                {
                    detail: [
                        `From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.`,
                    ],
                },
            ],
        },
        {
            title: `Operator precedence`,
            link: `https://javascript.info/operators#operator-precedence`,
            details: [
                {
                    detail: [
                        `If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.`,
                        `There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.`,
                        `The “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.`,
                        `You can see the "precedence table" if you need.`,
                    ],
                },
            ],
        },
        {
            title: `Assignment`,
            link: `https://javascript.info/operators#assignment`,
            details: [
                {
                    detail: [
                        `Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.`,
                        `That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.`,
                    ],
                },
            ],
        },
        {
            title: `Assignment = returns a value`,
            link: `https://javascript.info/operators#assignment-returns-a-value`,
            details: [
                {
                    detail: [
                        `All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.`,
                        `The call x = value writes the value into x and then returns it.`,
                        `Here’s a demo that uses an assignment as part of a more complex expression:`,
                    ],
                    code: [
                        `let a = 1;`,
                        `let b = 2;`,
                        ``,
                        `let c = 3 - (a = b + 1);`,
                        ``,
                        `alert( a );`,
                        `// 3`,
                        `alert( c );`,
                        `// 0`,
                    ],
                },
                {
                    detail: [
                        `In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.`,
                    ],
                },
            ],
        },
        {
            title: `Chaining assignments`,
            link: `https://javascript.info/operators#chaining-assignments`,
            details: [
                {
                    detail: [
                        `Another interesting feature is the ability to chain assignments:`,
                    ],
                    code: [
                        `let a, b, c;`,
                        ``,
                        `a = b = c = 2 + 2;`,
                        ``,
                        `alert( a );`,
                        `// 4`,
                        `alert( b );`,
                        `// 4`,
                        `alert( c );`,
                        `// 4`,
                    ],
                },
                {
                    detail: [
                        `Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.`,
                        `Once again, for the purposes of readability it’s better to split such code into few lines:`,
                    ],
                    code: [`c = 2 + 2;`, `b = c;`, `a = c;`],
                    noRun: true,
                },
            ],
        },
        {
            title: `Modify-in-place`,
            link: `https://javascript.info/operators#modify-in-place`,
            details: [
                {
                    detail: [
                        `We often need to apply an operator to a variable and store the new result in that same variable.`,
                    ],
                    code: [`let n = 2;`, `n = n + 5;`, `n = n * 2;`],
                    noRun: true,
                },
                {
                    detail: [
                        `This notation can be shortened using the operators += and *=:`,
                    ],
                    code: [
                        `let n = 2;`,
                        `n += 5;`,
                        `// now n = 7 (same as n = n + 5)`,
                        `n *= 2;`,
                        `// now n = 14 (same as n = n * 2)`,
                        ``,
                        `alert( n );`,
                        `// 14`,
                    ],
                },
                {
                    detail: [
                        `Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.`,
                    ],
                },
            ],
        },
        {
            title: `Increment/decrement`,
            link: `https://javascript.info/operators#increment-decrement`,
            details: [
                {
                    detail: [
                        `Increasing or decreasing a number by one is among the most common numerical operations.`,
                        `So, there are special operators for it:`,
                        `💠 Increment ++ increases a variable by 1:`,
                    ],
                    code: [
                        `let counter = 2;`,
                        `counter++;`,
                        `// works the same as counter = counter + 1, but is shorter`,
                        `alert( counter );`,
                        `// 3`,
                    ],
                },
                {
                    detail: [`💠 Decrement -- decreases a variable by 1:`],
                    code: [
                        `let counter = 2;`,
                        `counter--;`,
                        `// works the same as counter = counter - 1, but is shorter`,
                        `alert( counter );`,
                        `// 1`,
                    ],
                    important: [
                        {
                            title: `Important:`,
                            details: [
                                {
                                    detail: [
                                        `Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    detail: [
                        `The operators ++ and -- can be placed either before or after a variable.`,
                        `💠 When the operator goes after the variable, it is in “postfix form”: counter++.`,
                        `💠 The “prefix form” is when the operator goes before the variable: ++counter.`,
                        `Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.`,
                        `As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).`,
                        `To see the difference, here’s an example:`,
                    ],
                    code: [
                        `let counter = 1;`,
                        `let a = ++counter;`,
                        ``,
                        `alert(a);`,
                        `// 2`,
                    ],
                },
                {
                    detail: [
                        `The prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.`,
                        `Now, let’s use the postfix form:`,
                    ],
                    code: [
                        `let counter = 1;`,
                        `let a = counter++;`,
                        ``,
                        `alert(a);`,
                        `// 1`,
                    ],
                },
                {
                    detail: [
                        `In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.`,
                        `To summarize:`,
                        `💠 If the result of increment/decrement is not used, there is no difference in which form to use:`,
                    ],
                    code: [
                        `let counter = 0;`,
                        `counter++;`,
                        `++counter;`,
                        `alert( counter );`,
                        `// 2, the lines above did the same`,
                    ],
                },
                {
                    detail: [
                        `💠 If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:`,
                    ],
                    code: [`let counter = 0;`, `alert( ++counter );`, `// 1`],
                },
                {
                    detail: [
                        `💠 If we’d like to increment a value but use its previous value, we need the postfix form:`,
                    ],
                    code: [`let counter = 0;`, `alert( counter++ );`, `// 0`],
                    important: [
                        {
                            title: `Increment/decrement among other operators`,
                            details: [
                                {
                                    detail: [
                                        `The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.`,
                                        `For instance:`,
                                    ],
                                    code: [
                                        `let counter = 1;`,
                                        `alert( 2 * ++counter );`,
                                        `// 4`,
                                    ],
                                },
                                {
                                    detail: [`Compare with:`],
                                    code: [
                                        `let counter = 1;`,
                                        `alert( 2 * counter++ );`,
                                        `// 2, because counter++ returns the "old" value`,
                                    ],
                                },
                                {
                                    detail: [
                                        `Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.`,
                                        `While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.`,
                                        `We advise a style of “one line – one action”:`,
                                    ],
                                    code: [
                                        `let counter = 1;`,
                                        `alert( 2 * counter );`,
                                        `counter++;`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `Bitwise operators`,
            link: `https://javascript.info/operators#bitwise-operators`,
            details: [
                {
                    detail: [
                        `The list of operators:`,
                        `💠 AND ( & )`,
                        `💠 OR ( | )`,
                        `💠 XOR ( ^ )`,
                        `💠 NOT ( ~ )`,
                        `💠 LEFT SHIFT ( << )`,
                        `💠 RIGHT SHIFT ( >> )`,
                        `💠 ZERO-FILL RIGHT SHIFT ( >>> )`,
                        `These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level.`,
                    ],
                },
            ],
        },
        {
            title: `Comma`,
            link: `https://javascript.info/operators#comma`,
            details: [
                {
                    detail: [
                        `The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.`,
                        `The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.`,
                        `For example:`,
                    ],
                    code: [
                        `let a = (1 + 2, 3 + 4);`,
                        ``,
                        `alert( a );`,
                        `// 7 (the result of 3 + 4)`,
                    ],
                    important: [
                        {
                            title: `Comma has a very low precedence`,
                            details: [
                                {
                                    detail: [
                                        `Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.`,
                                        `Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    detail: [
                        `Why do we need an operator that throws away everything except the last expression?`,
                        `Sometimes, people use it in more complex constructs to put several actions in one line:`,
                    ],
                    code: [
                        `// three operations in one line`,
                        `for (a = 1, b = 3, c = a * b; a < 10; a++) {`,
                        ` ...`,
                        `}`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.`,
                    ],
                },
            ],
        },
        {
            title: `Tasks`,
            link: `https://javascript.info/operators#tasks`,
        },
        {
            title: `The postfix and prefix forms`,
            link: `https://javascript.info/operators#the-postfix-and-prefix-forms`,
            details: [
                {
                    detail: [
                        `What are the final values of all variables a, b, c and d after the code below?`,
                    ],
                    code: [
                        `let a = 1, b = 1;`,
                        ``,
                        `let c = ++a;`,
                        `let d = b++;`,
                        `// Answer: a = 2, b = 2, c = 2, d = 1;`,
                        "alert(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);",
                    ],
                },
            ],
        },
        {
            title: `Assignment result`,
            link: `https://javascript.info/operators#assignment-result`,
            details: [
                {
                    detail: [
                        `What are the values of a and x after the code below?`,
                    ],
                    code: [
                        `let a = 2;`,
                        ``,
                        `let x = 1 + (a *= 2);`,
                        `// Answer: a = 4, x = 5;`,
                        "alert(`a = ${a}, x = ${x}`);",
                    ],
                },
            ],
        },
        {
            title: `Type conversions`,
            link: `https://javascript.info/operators#type-conversions`,
            details: [
                {
                    detail: [`What are results of these expressions?`],
                    code: [
                        `"" + 1 + 0`,
                        `"" - 1 + 0`,
                        `true + false`,
                        `6 / "3"`,
                        `"2" * "3"`,
                        `4 + 5 + "px"`,
                        `"$" + 4 + 5`,
                        `"4" - 2`,
                        `"4px" - 2`,
                        `"  -9  " + 5`,
                        `"  -9  " - 5`,
                        `null + 1`,
                        `undefined + 1`,
                        `" \t \n" - 2`,
                    ],
                    noRun: true,
                },
                {
                    detail: [
                        `Explanation & Answers:`,
                        `1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.`,
                        `2. The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.`,
                        `3. The addition with a string appends the number 5 to the string.`,
                        `4. The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).`,
                        `5. null becomes 0 after the numeric conversion.`,
                        `6. undefined becomes NaN after the numeric conversion.`,
                        `7. Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.`,
                    ],
                    code: [
                        `// Answers:`,
                        `"" + 1 + 0 = "10" // (1)`,
                        `"" - 1 + 0 = -1 // (2)`,
                        `true + false = 1`,
                        `6 / "3" = 2`,
                        `"2" * "3" = 6`,
                        `4 + 5 + "px" = "9px"`,
                        `"$" + 4 + 5 = "$45"`,
                        `"4" - 2 = 2`,
                        `"4px" - 2 = NaN`,
                        `"  -9  " + 5 = "  -9  5" // (3)`,
                        `"  -9  " - 5 = -14 // (4)`,
                        `null + 1 = 1 // (5)`,
                        `undefined + 1 = NaN // (6)`,
                        `" \t \n" - 2 = -2 // (7)`,
                    ],
                    noRun: true,
                },
            ],
        },
        {
            title: `Fix the addition`,
            link: `https://javascript.info/operators#fix-the-addition`,
            details: [
                {
                    detail: [
                        `Here’s a code that asks the user for two numbers and shows their sum.`,
                        `It works incorrectly. The output in the example below is 12 (for default prompt values).`,
                        `Why? Fix it. The result should be 3.`,
                    ],
                    code: [
                        `let a = prompt("First number?", 1);`,
                        `let b = prompt("Second number?", 2);`,
                        ``,
                        `alert(a + b); // 12`,
                        `// Corrected Below:`,
                        `let c = +prompt("First number?", 1);`,
                        `let d = Number(prompt("Second number?", 2));`,
                        ``,
                        `alert(c + d); // 3`,
                    ],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
