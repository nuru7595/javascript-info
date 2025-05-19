import Common from "../Common";

export default function C1213({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/while-for",
            details: [
                {
                    detail: [
                        `We often need to repeat actions, like listing goods or running code for numbers 1 to 10. Loops let us do this by repeating the same code multiple times.`,
                    ],
                    important: [
                        {
                            title: `The for…of and for…in loops`,
                            details: [
                                {
                                    detail: [
                                        `A small announcement for advanced readers.`,
                                        `This article covers only basic loops: while, do..while and for(..;..;..).`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `The “while” loop`,
            link: `https://javascript.info/while-for#the-while-loop`,
            details: [
                {
                    detail: [
                        `Runs the body while condition is truthy.`,
                        `Syntax:`,
                    ],
                    code: [`while (condition) {`, `  // loop body`, `}`],
                    noRun: true,
                },
                {
                    detail: [`One run-through of the body is an iteration.`],
                    code: [
                        `let i = 0;`,
                        `while (i < 3) { // 0, 1, 2`,
                        `  alert( i );`,
                        `  i++;`,
                        `}`,
                    ],
                },
                {
                    detail: [
                        `Without i++, the loop would never end.`,
                        `You can use any expression as the condition. A common shorthand is while (i) instead of while (i !== 0):`,
                    ],
                    code: [
                        `let i = 3;`,
                        `while (i) { // stops when i reaches 0 (falsy)`,
                        `  alert( i );`,
                        `  i--;`,
                        `}`,
                    ],
                    important: [
                        {
                            title: `Curly braces are not required for a single-line body`,
                            details: [
                                {
                                    detail: [
                                        `If the loop body has a single statement, we can omit the curly braces {...}:`,
                                    ],
                                    code: [
                                        `let i = 3;`,
                                        `while (i) alert(i--);`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `The “do…while” loop`,
            link: `https://javascript.info/while-for#the-do-while-loop`,
            details: [
                {
                    detail: [
                        `do…while Loop — runs at least once. Body runs first, then the condition is checked. Continues while condition is truthy.`,
                        `Syntax:`,
                    ],
                    code: [`do {`, `  // loop body`, `} while (condition);`],
                    noRun: true,
                },
                {
                    detail: [
                        `Use do…while only when the body must run at least once; otherwise, prefer the regular while.`,
                        `Example:`,
                    ],
                    code: [
                        `let i = 0;`,
                        `do {`,
                        `  alert( i );`,
                        `  i++;`,
                        `} while (i < 3);`,
                    ],
                },
            ],
        },
        {
            title: `The “for” loop`,
            link: `https://javascript.info/while-for#the-for-loop`,
            details: [
                {
                    detail: [`Syntax:`],
                    code: [`for (begin; condition; step) {`, `  // body`, `}`],
                    noRun: true,
                },
                {
                    detail: [
                        `💠 begin – runs once at the start.`,
                        `💠 condition – checked before each iteration; stop when falsy.`,
                        `💠 body – executes while condition is truthy.`,
                        `💠 step – runs after each body execution.`,
                        `Example timeline for for (let i = 0; i < 3; i++):`,
                        `1. let i = 0 /* begin */`,
                        `2. i < 3? yes → body → alert(i)`,
                        `3. i++ /* step */`,
                        `4. repeat 2-3 until i < 3 is false.`,
                    ],
                    important: [
                        {
                            title: `Inline variable declaration`,
                            details: [
                                {
                                    detail: [
                                        `Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.`,
                                    ],
                                    code: [
                                        `for (let i = 0; i < 3; i++) {`,
                                        `  alert(i); // 0, 1, 2`,
                                        `}`,
                                        `alert(i); // error, no such variable`,
                                    ],
                                },
                                {
                                    detail: [
                                        `Instead of defining a variable, we could use an existing one:`,
                                    ],
                                    code: [
                                        `let i = 0;`,
                                        ``,
                                        `for (i = 0; i < 3; i++) { // use an existing variable`,
                                        `  alert(i); // 0, 1, 2`,
                                        `}`,
                                        ``,
                                        `alert(i); // 3, visible, because declared outside of the loop`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `Skipping parts`,
            link: `https://javascript.info/while-for#skipping-parts`,
            details: [
                {
                    detail: [
                        `You can omit any of the three for parts—just keep the two semicolons:`,
                    ],
                    code: [
                        `let i = 0; // begin skipped`,
                        `for (; i < 3; i++) alert(i); // 0,1,2`,
                    ],
                },
                {
                    code: [
                        `for (let i = 0; i < 3;) alert(i++); // step skipped`,
                    ],
                },
                {
                    code: [
                        `for (;;) { /* infinite loop */ } // all parts skipped`,
                    ],
                    noRun: true,
                },
            ],
        },
        {
            title: `Breaking the loop`,
            link: `https://javascript.info/while-for#breaking-the-loop`,
            details: [
                {
                    detail: [
                        `Loops normally exit when their condition becomes falsy. But we can stop a loop at any moment with the special break statement.`,
                        `For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:`,
                    ],
                    code: [
                        `let sum = 0;`,
                        ``,
                        `while (true) {`,
                        `  let value = +prompt("Enter a number", '');`,
                        `  if (!value) break; // (*)`,
                        `  sum += value;`,
                        `}`,
                        `alert( 'Sum: ' + sum );`,
                    ],
                },
                {
                    detail: [
                        `💠 At the line marked break we exit the loop the moment the user gives an empty entry or presses Cancel.`,
                        `💠 Control jumps to the first statement after the loop—alert—which shows the final sum.`,
                        `Why use while (true) … break?`,
                        `Sometimes we must check the stop-condition inside the loop (or in several spots), not just at the top or bottom. An “infinite” loop plus break lets us place that test exactly where it belongs, keeping the code simple and easy to read.`,
                    ],
                },
            ],
        },
        {
            title: `Continue to the next iteration`,
            link: `https://javascript.info/while-for#continue`,
            details: [
                {
                    detail: [
                        `continue is like a softer break. It doesn’t end the loop; it just says, “We’re finished with this iteration—start the next one.”`,
                        `Use it when we want to ignore the rest of the loop body for the current item and move on, as long as the loop condition is still true.`,
                        `The loop below uses continue to output only odd values:`,
                    ],
                    code: [
                        `for (let i = 0; i < 10; i++) {`,
                        ``,
                        `  // if true, skip the remaining part of the body`,
                        `  if (i % 2 == 0) continue;`,
                        ``,
                        `  alert(i); // 1, then 3, 5, 7, 9`,
                        `}`,
                    ],
                    important: [
                        {
                            title: `The continue directive helps decrease nesting`,
                            details: [
                                {
                                    detail: [
                                        `A loop that shows odd values could look like this:`,
                                    ],
                                    code: [
                                        `for (let i = 0; i < 10; i++) {`,
                                        ``,
                                        `  if (i % 2) {`,
                                        `    alert( i );`,
                                        `  }`,
                                        ``,
                                        `}`,
                                    ],
                                },
                                {
                                    detail: [`The same idea with continue`],
                                    code: [
                                        `for (let i = 0; i < 10; i++) {`,
                                        `  if (i % 2 === 0) continue; // even → skip this round`,
                                        `  alert(i); // odd → show it`,
                                        `}`,
                                    ],
                                },
                                {
                                    detail: [
                                        `Both versions do the same work.`,
                                        `Using continue keeps the main action (alert(i)) at the top level—no extra braces—so the loop stays flat and easier to scan, especially when we have more code after the check.`,
                                    ],
                                },
                            ],
                        },
                        {
                            title: `No break/continue to the right side of ‘?’`,
                            details: [
                                {
                                    detail: [
                                        `The ? (ternary) operator only works with expressions—things that produce a value.`,
                                        `Loop directives like break or continue are statements, not expressions, so they can’t appear after ? :`,
                                    ],
                                    code: [
                                        `// OK with if…else:`,
                                        `if (i > 5) {`,
                                        `  alert(i);`,
                                        `} else {`,
                                        `  continue; // valid here`,
                                        `}`,
                                        ``,
                                        `// ❌ Won’t work with ? :`,
                                        `(i > 5) ? alert(i) : continue; // syntax error`,
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
            title: `Labels for break/continue`,
            link: `https://javascript.info/while-for#labels-for-break-continue`,
            details: [
                {
                    detail: [
                        `When we have loops inside loops, a plain break stops only the innermost one. Add a label to break out of several levels at once.`,
                    ],
                    code: [
                        `outer: for (let i = 0; i < 3; i++) {         // label the outer loop`,
                        ``,
                        `  for (let j = 0; j < 3; j++) {`,
                        "    const v = prompt(`Value at (${i}, ${j})`, '');",
                        ``,
                        `    if (!v) break outer;                     // leave both loops`,
                        `    // otherwise, process v …`,
                        `  }`,
                        `}`,
                        ``,
                        `alert('Done!');`,
                    ],
                },
                {
                    detail: [
                        `💠 outer: names the outer loop.`,
                        `💠 break outer; jumps straight to alert('Done!'), skipping all remaining iterations.`,
                        `💠 continue outer; (used the same way) would skip to the next turn of the labeled loop.`,
                        `Use a label only when we truly need to exit or skip multiple loop levels; otherwise a regular break or continue is simpler.`,
                    ],
                    important: [
                        {
                            title: `Labels do not allow to “jump” anywhere`,
                            details: [
                                {
                                    detail: [
                                        `💠 break/continue <label> must be inside the labeled block or loop.`,
                                        `💠 You can label any block, but we nearly always label loops.`,
                                        `💠 continue <label> works only in loops.`,
                                        `💠 Use labeled break/continue mainly to exit or skip nested loops.`,
                                    ],
                                    code: [
                                        `label: { // legal but rare`,
                                        `  break label; // exits this block`,
                                        `}`,
                                        ``,
                                        `break label; // ❌ illegal here`,
                                        `label: for (...) // loop starts after the illegal break`,
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
            title: `Summary`,
            link: `https://javascript.info/while-for#summary`,
            details: [
                {
                    detail: [
                        `💠 We covered 3 types of loops:`,
                        `⚫ while – The condition is checked before each iteration.`,
                        `⚫ do..while – The condition is checked after each iteration.`,
                        `⚫ for (;;) – The condition is checked before each iteration, additional settings available.`,
                        `💠 To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.`,
                        `💠 If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.`,
                        `💠 break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.`,
                    ],
                },
            ],
        },
        {
            title: `Tasks`,
            link: `https://javascript.info/while-for#tasks`,
        },
        {
            title: `Last loop value`,
            link: `https://javascript.info/while-for#last-loop-value`,
            details: [
                {
                    detail: [
                        `What is the last value alerted by this code? Why?`,
                    ],
                    code: [
                        `let i = 3;`,
                        ``,
                        `while (i) {`,
                        `  alert( i-- );`,
                        `} // 1`,
                    ],
                },
            ],
        },
        {
            title: `Which values does the while loop show?`,
            link: `https://javascript.info/while-for#which-values-does-the-while-loop-show`,
            details: [
                {
                    detail: [
                        `For every loop iteration, write down which value it outputs and then compare it with the solution.`,
                        `Both loops alert the same values, or not?`,
                        `1. The prefix form ++i:`,
                    ],
                    code: [
                        `let i = 0;`,
                        `while (++i < 5) alert( i ); // 1, 2, 3, 4`,
                    ],
                },
                {
                    detail: [`2. The postfix form i++`],
                    code: [
                        `let i = 0;`,
                        `while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5`,
                    ],
                },
            ],
        },
        {
            title: `Which values get shown by the "for" loop?`,
            link: `https://javascript.info/while-for#which-values-get-shown-by-the-for-loop`,
            details: [
                {
                    detail: [
                        `For each loop write down which values it is going to show. Then compare with the answer.`,
                        `Both loops alert same values or not?`,
                        `1. The postfix form:`,
                    ],
                    code: [
                        `for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4`,
                    ],
                },
                {
                    detail: [`2. The prefix form:`],
                    code: [
                        `for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4`,
                    ],
                },
            ],
        },
        {
            title: `Output even numbers in the loop`,
            link: `https://javascript.info/while-for#output-even-numbers-in-the-loop`,
            details: [
                {
                    detail: [
                        `Use the for loop to output even numbers from 2 to 10.`,
                    ],
                    code: [
                        `// Solution`,
                        `for (let i = 1; i <= 10; i++) {`,
                        `   if (i % 2) continue;`,
                        `   alert(i);`,
                        `}`,
                    ],
                },
            ],
        },
        {
            title: `Replace "for" with "while"`,
            link: `https://javascript.info/while-for#replace-for-with-while`,
            details: [
                {
                    detail: [
                        `Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).`,
                    ],
                    code: [
                        `for (let i = 0; i < 3; i++) {`,
                        "  alert( `number ${i}!` );",
                        `}`,
                    ],
                },
                {
                    code: [
                        `// Solution`,
                        `let i = 0;`,
                        `while (i < 3) {`,
                        "   alert( `number ${i}!` );",
                        `   i++;`,
                        `}`,
                    ],
                },
            ],
        },
        {
            title: `Repeat until the input is correct`,
            link: `https://javascript.info/while-for#repeat-until-the-input-is-correct`,
            details: [
                {
                    detail: [
                        `Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.`,
                        `The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.`,
                        `Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.`,
                    ],
                    code: [
                        `// Solution`,
                        `let num;`,
                        `do {`,
                        `   num = prompt('Enter a number greater than 100!', 0);`,
                        `} while (num <= 100 && num)`,
                    ],
                },
            ],
        },
        {
            title: `Output prime numbers`,
            link: `https://javascript.info/while-for#output-prime-numbers`,
            details: [
                {
                    detail: [
                        `An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself. In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.`,
                        `For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.`,
                        `💠 Write the code which outputs prime numbers in the interval from 2 to n.`,
                        `For n = 10 the result will be 2,3,5,7. The code should work for any n, not be hard-tuned for any fixed value.`,
                    ],
                    code: [
                        `// Solution`,
                        `let n = 10;`,
                        ``,
                        `label:for (let i = 2; i <= n; i++) {`,
                        `   for (let j = 2; j < i; j++) {`,
                        `       if (i % j == 0) continue label;`,
                        `   }`,
                        `   alert(i);`,
                        `}`,
                    ],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
