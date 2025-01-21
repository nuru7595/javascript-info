import Code from "./Code";

export default function Common({ obj }) {
    return (
        <section>
            <h2 className="title">
                <a
                    href={obj.link}
                    target="_blank"
                    title="Go To Javascript Info"
                >
                    {obj.title}
                </a>
            </h2>
            {obj.points ? (
                <div className="p-3">
                    <h3>Points:</h3>
                    {obj.points.map((x, i) => (
                        <div key={i}>
                            <ul>
                                <li className="font-bold">
                                    <a
                                        href={x.link}
                                        target="_blank"
                                        title="Go To Javascript Info"
                                    >
                                        {x.point}
                                    </a>
                                </li>
                            </ul>
                            {x.details?.map((y, j) => (
                                <div key={j}>
                                    {y.detail.map((z, k) => (
                                        <p className="text-lg my-2" key={k}>
                                            {z}
                                        </p>
                                    ))}
                                    {y.code ? <Code code={y.code} /> : null}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : null}
            {obj.summary ? (
                <div className="p-3">
                    <h3>Summary:</h3>
                    <ul>
                        {obj.summary.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
                </div>
            ) : null}
            {obj.tasks ? (
                <div className="p-3">
                    <h3>Tasks:</h3>
                    {obj.tasks.map((x, i) => (
                        <div key={i}>
                            <h4 className="font-bold">{`${i + 1}. ${
                                x.name
                            }`}</h4>
                            <p>
                                <span className="font-bold">Task: </span>
                                {x.task}
                            </p>
                            {x.code ? (
                                <div>
                                    <strong>Solution:</strong>
                                    <Code code={x.code} />
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            ) : null}
        </section>
    );
}
