import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>GreenRoute</h1><p>Auditable environmental project registry and claims.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
