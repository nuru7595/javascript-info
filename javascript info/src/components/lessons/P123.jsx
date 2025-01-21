import Common from "../Common";
import Empty from "../Empty";

export default function P123({ title }) {
    const obj = {
        title: title,
        link: "",
        points: [
            {
                point: ``,
                link: "",
                details: [
                    {
                        detail: [],
                        code: [],
                    },
                    {
                        detail: [],
                        code: [],
                    },
                ],
            },
            {
                point: ``,
                link: "",
            },
            {
                point: ``,
                link: "",
            },
        ],
        summary: [],
        tasks: [
            {
                name: "",
                task: ``,
                code: [],
            },
        ],
    };

    return <Empty msg="Up Next..." />; //<Common obj={obj} />;
}
