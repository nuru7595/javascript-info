import Code from "./Code";

export default function Common({ obj }) {
    return (
        <section>
            <h2 className="title">{obj.title}</h2>
            {obj.points ? (
                <div className="p-3">
                    <h3>Points:</h3>
                    <ul>
                        {obj.points.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
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
                            <div>
                                <strong>Solution:</strong>
                                <Code code={x.code} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </section>
    );
}
