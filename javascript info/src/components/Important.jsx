import { FaInfoCircle } from "react-icons/fa";
import Details from "./Details";

export default function important({ imp }) {
    return imp.map((x, i) => (
        <div
            key={i}
            className="border-slate-400 border-4 rounded-xl bg-slate-300 py-3 mx-3 my-6"
        >
            <h2 className="flex justify-normal items-center gap-3 px-3">
                <FaInfoCircle
                    className="bg-white text-sky-500 rounded-full"
                    size={36}
                />
                {x.title}
            </h2>
            <Details details={x.details} />
        </div>
    ));
}
