export default function Select(props) {
    return (
        <div>
            <select value={props.value} onChange={props.onChange}>
                <option value="">- - Select a {props.name} - -</option>
                {props.name === "Part" ? (
                    <>
                        <option value="0">Information</option>
                        <option value="1">1. The JavaScript Language</option>
                        <option value="2">
                            2. Browser: Document, Events, Interfaces
                        </option>
                        <option value="3">3. Additional articles</option>
                    </>
                ) : props.options}
            </select>
        </div>
    );
}
