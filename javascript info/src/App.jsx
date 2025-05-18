import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { data } from "./components/data";
import Selector from "./components/Selector";
import Empty from "./components/Empty";
import Information from "./components/Information";

export default function App() {
    const [part, setPart] = useState(1);
    const [chapter, setChapter] = useState(2);
    const [lesson, setLesson] = useState(14);
    const [Component, setComponent] = useState(null);
    const [fileTitle, setFileTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Handling Selector Updates
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

    // Dynamic Component Loading
    useEffect(() => {
        const loadComponent = async () => {
            setIsLoading(true);
            const cData = data[parseInt(part)]?.find(
                (x) => x.chapter === parseInt(chapter)
            );
            if (cData) {
                const lData = cData.lessons.find(
                    (x) => x.lesson === parseInt(lesson)
                );
                if (lData) {
                    setFileTitle(lData.name);
                }
            }
            try {
                const module = await import(
                    `./components/C${part}${chapter}/L${part}${chapter}${lesson}.jsx`
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

    return (
        <>
            <Header />
            <main className="container">
                <Selector
                    data={data}
                    part={part}
                    chapter={chapter}
                    lesson={lesson}
                    handlePart={handlePart}
                    handleChapter={handleChapter}
                    handleLesson={handleLesson}
                />
                {/* Conditional Rendering */}
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
                    <section className="common-section">
                        <Component title={fileTitle} />
                    </section>
                ) : (
                    <Empty msg="Coming Soon . . ." />
                )}
            </main>
            <Footer />
        </>
    );
}
