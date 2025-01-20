import { BiPlay } from "react-icons/bi";

export default function Code({ code }) {
    return (
        <div className="my-2 bg-slate-300 relative">
            {code.func ? (
                <button
                    className="bg-green-500 px-4 text-white sm:absolute top-0 right-0 block w-full sm:w-auto"
                    onClick={code.func}
                    aria-label="Run Code"
                    title="Run Code"
                >
                    <BiPlay size={40} className="mx-auto" />
                </button>
            ) : null}
            <div className="text-green-700 text-lg py-3 px-5">
                {code.script ? (
                    code.script.map((x, i) => (
                        <p key={i}>
                            <span className="mr-2 text-gray-600">{i + 1}</span>
                            {x}
                        </p>
                    ))
                ) : (
                    <p className="text-gray-600">{code}</p>
                )}
            </div>
        </div>
    );
}
