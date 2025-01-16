import Empty from "../Empty";

export default function Part2({ chapter, lesson }) {
    return (
        <>
            {lesson !== "" ? (
                <Empty msg="Coming Soon . . ." bg="bg-yellow-300" />
            ) : null}
        </>
    );
}
