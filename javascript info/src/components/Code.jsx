import { BiPlay } from "react-icons/bi";

export default function Code({ code, noRun }) {
    return (
        <div className="my-2 bg-slate-300 relative">
            <div className="text-green-700 text-lg py-3 px-5 font-bold">
                {code.map((x, i) => (
                    <p
                        className={
                            x.trim().slice(0, 2) === "//" ? "text-red-600" : null
                        }
                        key={i}
                    >
                        <span className="mr-2 text-gray-600">{i + 1}</span>
                        {x}
                    </p>
                ))}
            </div>
            {noRun || (
                <button
                    className="bg-green-500 px-4 text-white sm:absolute top-0 right-0 block w-full sm:w-auto"
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
