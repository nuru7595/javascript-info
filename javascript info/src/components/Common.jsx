import "./commonStyles.css";
import Details from "./Details";

export default function Common({ data }) {
    return data?.map((x, i) => (
        <div key={i}>
            <h2 className="title">
                <a href={x.link} target="_blank" title="Go To Javascript Info">
                    {x.title}
                </a>
            </h2>
            {x.details ? <Details details={x.details} /> : null}
        </div>
    ));
}
