import Code from "./Code";
import Common from "./Common";
import Important from "./Important";

export default function Details({ details }) {
    const hasNestedDetails = details.find((x) => x.details);
    if (hasNestedDetails) {
        return <Common data={details} />;
    } else {
        return details?.map((x, i) => (
            <div key={i}>
                {x.detail?.map((y, j) => (
                    <p className="text-lg my-6" key={j}>
                        {y}
                    </p>
                ))}
                {x.code ? <Code code={x.code} noRun={x.noRun} /> : null}
                {x.important ? <Important imp={x.important} /> : null}
            </div>
        ));
    }
}
