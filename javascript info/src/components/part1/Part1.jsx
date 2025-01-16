import Empty from "../Empty";
import P111 from "./P111";
import P112 from "./P112";

export default function Part1({ chapter, lesson }) {
    return (
        <>
            {chapter === "1" ? (
                lesson === "1" ? (
                    <P111 />
                ) : lesson === "2" ? (
                    <P112 />
                ) : lesson !== "" ? (
                    <Empty msg="Coming Soon . . ." bg="bg-yellow-300" />
                ) : null
            ) : // Chapter 1 Ends;
            lesson !== "" ? (
                <Empty msg="Coming Soon . . ." bg="bg-yellow-300" />
            ) : null}
        </>
    );
}
