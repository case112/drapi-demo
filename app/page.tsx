"use client";

import { useState } from "react";

export default function Home() {
    const [approvals, setApprovals] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(false);

    const loadResults = async () => {
        setLoading(true);

        try {
            const res = await fetch(
                "https://mwr.mikkis.shop/api/lists/all-approvals?dataSource=approvals"
            );
            const data = await res.json();
            setApprovals(data);
        } catch (err) {
            console.error(err);
        }

        setLoading(false);
    };

    return (
        <main>
            <div>
                <button onClick={loadResults}>
                    {loading ? "Loading..." : "GET results"}
                </button>

                <br />
                <br />

                {approvals && (
                    <table border={1} cellPadding={2} style={{ borderStyle: "dotted", borderRadius: 5 }}>
                        <tbody>
                            {approvals.map((a, index) => (
                                <tr key={a["@unid"]} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#d8d8d8"}}>
                                    <td>{a["@index"]}</td>
                                    <td>{new Date(a["$1"]).toLocaleString("et-EE")}</td>
                                    <td>{a.Subject}</td>
                                    <td>{a["@unid"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </main>
    );
}