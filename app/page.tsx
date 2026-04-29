    export default async function Home() {
    const data = await fetch(
        "https://mwr.mikkis.shop/api/lists/all-approvals?dataSource=approvals",
    );
    const approvals: any[] = await data.json();

    console.log(approvals);

    const listApprovals = approvals.map((a) => (
        <tr  key={a["@unid"]}>
            <td>{a["@index"]}</td>
            <td>{new Date(a["$1"]).toLocaleString("et-EE")}</td>
            <td>{a.Subject}</td>
            <td>{a["@unid"]}</td>
        </tr>
    ));

    return (
        <main>
        <div>
            <br></br>
            {listApprovals && 
            <table border={1} cellPadding={2} style={{ borderStyle: "dotted", borderRadius: 5}} >
                <tbody>
                {listApprovals}
                </tbody>
            </table>
            }
        </div>
        </main>
    );
    }
