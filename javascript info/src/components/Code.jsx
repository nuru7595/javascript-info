import { BiPlay } from "react-icons/bi";

export default function Code({ code, noRun }) {
    return (
        <div className="my-6 bg-black relative">
            <div className="text-green-600 text-lg py-3 px-5 font-bold">
                {code.map((x, i) => (
                    <p
                        className={`px-0 py-1 ${
                            x.trim().slice(0, 2) === "//"
                                ? "text-red-600"
                                : null
                        }`}
                        key={i}
                    >
                        <span className="mr-5 text-gray-600">{i + 1}</span>
                        {x}
                    </p>
                ))}
            </div>
            {noRun || (
                <button
                    className="bg-green-600 px-4 text-white sm:absolute top-0 right-0 block w-full sm:w-auto"
                    onClick={() => {
                        const fullCode = code.join("\n");
                        eval(fullCode);
                    }}
                    aria-label="Run Code"
                    title="Run Code"
                >
                    <BiPlay size={40} className="mx-auto" />
                </button>
            )}
        </div>
    );
}
