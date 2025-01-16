export default function Empty(props) {
    return (
        <section className={props.bg ? props.bg : "bg-red-400"}>
            <h3 className="text-center p-5 font-bold">{props.msg}</h3>
        </section>
    );
}
