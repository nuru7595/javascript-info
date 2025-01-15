export default function Information() {
    return (
        <section className="information">
            <h2 className="section-title">Information</h2>
            <table className="table-fixed w-full">
                <tbody>
                    <tr>
                        <td>Started:</td>
                        <td>15 January 2025</td>
                    </tr>
                    <tr>
                        <td>Last Updated:</td>
                        <td>15 January 2025</td>
                    </tr>
                    <tr>
                        <td>Ongoing:</td>
                        <td>0 Days</td>
                    </tr>
                    <tr>
                        <td>Allocated Time:</td>
                        <td>5 Hours</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>Running . . .</td>
                    </tr>
                    <tr>
                        <td>Source:</td>
                        <td>
                            <a
                                href="https://javascript.info/"
                                title="Javascript Docs"
                                target="_blank"
                                className="underline tracking-wider"
                            >
                                Javascript.info
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
