export default function Empty(props) {
    return (
        <section className={props.bg || "bg-yellow-300"}>
            <h3 className="text-center p-5 font-bold">{props.msg}</h3>
        </section>
    );
}
