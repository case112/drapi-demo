export default async function Home() {

  const data = await fetch('https://mwr.mikkis.shop/api/lists/all-approvals?dataSource=approvals');
  const approvals: any[] = await data.json();

  console.log(approvals);

  const listApprovals = approvals.map(a =>
    <li key={a["@unid"]}>{a.Subject}</li>
  );

  return (
    <main>
      <div>
        
        <br></br>
        {listApprovals &&
          <ul>{listApprovals}</ul>
        }
      </div>
    </main>
  );
}
