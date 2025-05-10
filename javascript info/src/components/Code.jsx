import { BiPlay } from "react-icons/bi";

export default function Code({ code, noRun }) {
    return (
        <div className="my-6 bg-black relative">
            <div className="text-green-600 text-lg py-3 px-5 font-bold">
                {code.map((line, i) => {
                    const commentIndex = line.indexOf("//");
                    const beforeComment =
                        commentIndex !== -1 ? line.slice(0, commentIndex) : line;
                    const comment =
                        commentIndex !== -1 ? line.slice(commentIndex) : null;

                    return (
                        <p className="px-0 py-1" key={i}>
                            <span className="mr-5 text-gray-600">{i + 1}</span>
                            <span>{beforeComment}</span>
                            {comment && (
                                <span className="text-red-600">{comment}</span>
                            )}
                        </p>
                    );
                })}
            </div>
            {noRun || (
                <button
                    className="bg-green-600 px-4 text-white top-0 right-0 w-full cursor-pointer hover:bg-green-500 duration-300 text-lg font-bold flex flex-row flex-nowrap justify-center items-center"
                    onClick={() => {
                        const fullCode = code.join("\n");
                        eval(fullCode);
                    }}
                    aria-label="Run Code"
                    title="Run Code"
                >
                    <BiPlay size={40} />
                    Run the Code
                </button>
            )}
        </div>
    );
}
