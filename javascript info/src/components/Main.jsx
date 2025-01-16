import { useState } from "react";
import { data } from "./data";
import Information from "./Information";
import Empty from "./Empty";
import { nanoid } from "nanoid";
import Part1 from "./part1/Part1";
import Part2 from "./part2/Part2";
import Part3 from "./part3/Part3";

export default function Main() {
    const [part, setPart] = useState("1");
    const [chapter, setChapter] = useState("1");
    const [lesson, setLesson] = useState("2");
    // State Values;

    const handlePart = (e) => {
        setPart(e.currentTarget.value);
        setChapter("");
        setLesson("");
    };
    const handleChapter = (e) => {
        setChapter(e.currentTarget.value);
        setLesson("");
    };
    const handleLesson = (e) => {
        setLesson(e.currentTarget.value);
    };
    // Handling Selectors;

    const chapterOptions = data[part]?.map((x) => (
        <option key={nanoid()} value={x.chapter}>
            {part}.{x.chapter} {x.name}
        </option>
    ));
    const lessonArr =
        chapter &&
        data[part]?.find((x) => x.chapter === parseInt(chapter)).lessons;
    const lessonOptions =
        chapter &&
        lessonArr?.map((x) => (
            <option key={nanoid()} value={x.lesson}>
                {part}.{chapter}.{x.lesson} {x.name}
            </option>
        ));

    return (
        <main className="container">
            <section>
                <h2 className="title">Selector</h2>
                <div className="selector-parent">
                    <div>
                        <select value={part} onChange={handlePart}>
                            <option value="">- - Select a Part - -</option>
                            <option value="0">Information</option>
                            <option value="1">
                                1. The JavaScript Language
                            </option>
                            <option value="2">
                                2. Browser: Document, Events, Interfaces
                            </option>
                            <option value="3">3. Additional articles</option>
                        </select>
                    </div>
                    <div>
                        <select value={chapter} onChange={handleChapter}>
                            <option value="">- - Select a Chapter - -</option>
                            {chapterOptions}
                        </select>
                    </div>
                    <div>
                        <select value={lesson} onChange={handleLesson}>
                            <option value="">- - Select a Lesson - -</option>
                            {lessonOptions}
                        </select>
                    </div>
                </div>
            </section>
            {/* Selector Section End */}
            {part === "" ? (
                <Empty msg="Please Select a Part!!" />
            ) : part === "0" ? (
                <Information />
            ) : chapter === "" ? (
                <Empty msg="Please Select a Chapter!!" />
            ) : lesson === "" ? (
                <Empty msg="Please Select a Lesson!!" />
            ) : null}
            {/* Main Component Render */}
            {part === "1" ? (
                <Part1 chapter={chapter} lesson={lesson} />
            ) : part === "2" ? (
                <Part2 chapter={chapter} lesson={lesson} />
            ) : part === "3" ? (
                <Part3 chapter={chapter} lesson={lesson} />
            ) : null}
        </main>
    );
}
