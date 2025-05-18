import { nanoid } from "nanoid";
import Select from "./Select";

export default function Selector(props) {
    const chapterOptions = props.data[props.part]?.map((x) => (
        <option key={nanoid()} value={x.chapter}>
            {props.part}.{x.chapter} {x.name}
        </option>
    ));
    const lessonArr =
        props.chapter &&
        props.data[props.part]?.find(
            (x) => x.chapter === parseInt(props.chapter)
        ).lessons;
    const lessonOptions =
        props.chapter &&
        lessonArr?.map((x) => (
            <option key={nanoid()} value={x.lesson}>
                {props.part}.{props.chapter}.{x.lesson} {x.name}
            </option>
        ));

    return (
        <section>
            <h2 className="title">Selector</h2>
            <div className="selector-parent">
                <Select
                    name="Part"
                    value={props.part}
                    onChange={props.handlePart}
                />
                <Select
                    name="Chapter"
                    value={props.chapter}
                    onChange={props.handleChapter}
                    options={chapterOptions}
                />
                <Select
                    name="Lesson"
                    value={props.lesson}
                    onChange={props.handleLesson}
                    options={lessonOptions}
                />
            </div>
        </section>
    );
}
