import React from 'react'
function Card(props: any) {
    return (
        <article className="workerCard">
            <header>
                <h2>{props.name}</h2>
                <p>{props.role}</p>
            </header>
            <p>{props.status}</p>
            <p>{props.exp} | {props.loc}</p>
            <strong>{props.rate}</strong>  <br />
            <button>{props.btn}</button>
        </article>
    )
}
function WorkerCard() {
    return (
        <div>
            <h4>Browse Workforce</h4>
            <h1>Available Workers</h1>

            <Card
                name="Rajan Kumar"
                role="Senior Mason"
                status="Available"
                exp="12 yrs exp"
                loc="Mumbai"
                rate="₹850/day"
                btn="Connect"
            />
            <Card
                name="Suresh Mehta"
                role="Steel Fixer"
                status="Available"
                exp="8 yrs exp"
                loc="Delhi"
                rate="₹950/day"
                btn="Connect"
            />
            <Card
                name="Anil Patel"
                role="Electrician"
                status="On Site"
                exp="6 yrs exp"
                loc="Pune"
                rate="₹1,100/day"
                btn="Hire"
            />
            <Card
                name="Priya Group"
                role="Labour Gang (15)"
                status="Available"
                exp="Group"
                loc="Chennai"
                rate="₹11K/day"
                btn="Connect"
            />
        </div>
    )
}

export default WorkerCard

