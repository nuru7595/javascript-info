import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Selector from "./components/Selector";
import Empty from "./components/Empty";
import Information from "./components/Information";

export default function App(props) {
    const [part, setPart] = useState(props.a);
    const [chapter, setChapter] = useState(props.b);
    const [lesson, setLesson] = useState(props.c);
    const [Component, setComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
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
    // Handle Selector;

    const fileName = `P${part}${chapter}${lesson}`;
    useEffect(() => {
        const loadComponent = async () => {
            setIsLoading(true);
            try {
                const module = await import(
                    `./components/lessons/${fileName}.jsx`
                );
                setComponent(() => module.default);
            } catch {
                setComponent(null);
            } finally {
                setIsLoading(false);
            }
        };
        setComponent(null);
        if (part && chapter && lesson) {
            loadComponent();
        }
    }, [part, chapter, lesson]);
    // Dynamic Component Loading;

    return (
        <>
            <Header />
            <main className="container">
                <Selector
                    part={part}
                    chapter={chapter}
                    lesson={lesson}
                    handlePart={handlePart}
                    handleChapter={handleChapter}
                    handleLesson={handleLesson}
                />
                {part === "" ? (
                    <Empty msg="Please Select a Part!!" bg="bg-red-400" />
                ) : part === "0" ? (
                    <Information />
                ) : chapter === "" ? (
                    <Empty msg="Please Select a Chapter!!" bg="bg-red-400" />
                ) : lesson === "" ? (
                    <Empty msg="Please Select a Lesson!!" bg="bg-red-400" />
                ) : isLoading ? (
                    <Empty msg="Loading . . ." />
                ) : Component ? (
                    <Component />
                ) : (
                    <Empty msg="Coming Soon . . ." />
                )}
            </main>
            <Footer />
        </>
    );
}
