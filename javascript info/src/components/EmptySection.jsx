export default function EmptySection(props) {
    return (
        <section className={`bg-${props.bg ? props.bg : "red-400"}`}>
            <h3 className="text-center p-5 font-bold">{props.msg}</h3>
        </section>
    );
}
