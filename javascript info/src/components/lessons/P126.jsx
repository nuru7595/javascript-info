import Common from "../Common";

export default function P126({ title }) {
    const data = [
        {
            title: title,
            link: "https://javascript.info/alert-prompt-confirm",
        },
        {
            title: `alert`,
            link: `https://javascript.info/alert-prompt-confirm`,
            details: [
                {
                    detail: [
                        `This one we’ve seen already. It shows a message and waits for the user to press “OK”.`,
                        `The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.`,
                        `For example:`,
                    ],
                    code: [`alert("Hello");`],
                },
            ],
        },
        {
            title: `prompt`,
            link: `https://javascript.info/alert-prompt-confirm#prompt`,
            details: [
                {
                    detail: [
                        `It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.`,
                        `The function prompt accepts two arguments:`,
                    ],
                    code: [`result = prompt(title, [default]);`],
                    noRun: true,
                },
                {
                    detail: [
                        `title: The text to show the visitor.`,
                        `default: An optional second parameter, the initial value for the input field.`,
                    ],
                    important: [
                        {
                            title: `The square brackets in syntax [...]`,
                            details: [
                                {
                                    detail: [
                                        `The square brackets around default in the syntax above denote that the parameter is optional, not required.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    detail: [
                        `The call to prompt returns the text from the input field or null if the input was canceled.`,
                        `For instance:`,
                    ],
                    code: [
                        `let age = prompt('How old are you?', 100);`,
                        ``,
                        "alert(`You are ${age} years old!`);",
                        `// You are 100 years old!`,
                    ],
                    important: [
                        {
                            title: `In IE: always supply a default`,
                            details: [
                                {
                                    detail: [
                                        `The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.`,
                                        `So, for prompts to look good in IE, we recommend always providing the second argument:`,
                                    ],
                                    code: [
                                        `let test = prompt('Test', '');`,
                                        `// For Internet Explorer`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: `confirm`,
            link: `https://javascript.info/alert-prompt-confirm#confirm`,
            details: [
                {
                    detail: [
                        `The function confirm shows a modal window with a question and two buttons: OK and Cancel.`,
                        `The result is true if OK is pressed and false otherwise.`,
                        `For example:`,
                    ],
                    code: [
                        `let isBoss = confirm("Are you the boss?");`,
                        ``,
                        `alert( isBoss );`,
                        `// true if OK is pressed`,
                    ],
                },
            ],
        },
        {
            title: `Summary`,
            link: `https://javascript.info/alert-prompt-confirm#summary`,
            details: [
                {
                    detail: [
                        `⬛ We covered 3 browser-specific functions to interact with visitors:`,
                        `⚫ alert`,
                        `shows a message.`,
                        `⚫ prompt`,
                        `shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.`,
                        `⚫ confirm`,
                        `shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.`,
                        `All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.`,
                        `⬛ There are two limitations shared by all the methods above:`,
                        `1. The exact location of the modal window is determined by the browser. Usually, it’s in the center.`,
                        `2. The exact look of the window also depends on the browser. We can’t modify it.`,
                    ],
                },
            ],
        },
        {
            title: `Tasks`,
            link: `https://javascript.info/alert-prompt-confirm#tasks`,
            details: [
                {
                    title: `A simple page`,
                    link: `https://javascript.info/alert-prompt-confirm#a-simple-page`,
                    details: [
                        {
                            detail: [
                                `Create a web-page that asks for a name and outputs it.`,
                            ],
                        },
                    ],
                },
                {
                    title: `Solution`,
                    details: [
                        {
                            code: [
                                `let userName = prompt("What's your name?", "");`,
                                ``,
                                "alert(`Your name is ${userName}`);",
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    return <Common data={data} />;
}
