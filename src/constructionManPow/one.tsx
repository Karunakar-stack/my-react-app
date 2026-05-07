import React from 'react';
function Card(props: any) {
    return (
        <article className="workerCard">
            <div className="card-top">
                <span className={props.iconBg}>{props.icon}</span>
                <header>
                    <h2>{props.name}</h2>
                    <p>{props.role}</p>
                </header>
                 </div>
                <p>{props.status}</p>
                <p>{props.exp} | {props.loc}</p>
                <strong>{props.rate}</strong> <br />
                <button>{props.btn}</button>
        </article>
    );
}
function WorkforcePlatform() {
    return (
        <div className="main-wrapper">
            <section className="section-padding">
                <div className="section-header">
                    <div className="title-group">
                        <h3>Who it's for</h3><br />
                        <h2>Every role, one platform</h2>
                    </div>
                    <a href="#" className="view-all">View all →</a>
                </div>
                <div className="tabs">
                    <button>All Workers</button>
                    <button>Skilled</button>
                    <button>Semi-skilled</button>
                    <button>Contractors</button>
                    <button>Agencies</button>
                </div>
                <div className="role-grid">
                    <article className="role-box"><div>🧱</div><h3>Mason</h3><p>4,210 available</p></article>
                    <article className="role-box"><div>🪚</div><h3>Carpenter</h3><p>2,880 available</p></article>
                    <article className="role-box"><div>⚡</div><h3>Electrician</h3><p>3,100 available</p></article>
                    <article className="role-box"><div>🔧</div><h3>Plumber</h3><p>1,950 available</p></article>
                    <article className="role-box"><div>🏗</div><h3>Steel Fixer</h3><p>1,640 available</p></article>
                    <article className="role-box"><div>🎨</div><h3>Painter</h3><p>2,200 available</p></article>
                    <article className="role-box"><div>👷</div><h3>Supervisor</h3><p>890 available</p></article>
                    <article className="role-box"><div>🏢</div><h3>L. Contractor</h3><p>430 registered</p></article>
                </div>
            </section>
            <section className="section-padding">
                <div className="section-header">
                    <div className="title-group">
                        <h3>Browse Workforce</h3><br />
                        <h2>Available Workers</h2>
                    </div>
                    <a href="#" className="view-all">View all →</a>
                </div>
                <div className="worker-list">
                    <Card name="Rajan Kumar" icon="RK" iconBg="rk-bg" role="Senior Mason" status="Available" exp="12 yrs exp" loc="Mumbai" rate="₹850/day" btn="Connect" />
                    <Card name="Suresh Mehta" icon="SM" iconBg="sm-bg" role="Steel Fixer" status="Available" exp="8 yrs exp" loc="Delhi" rate="₹950/day" btn="Connect" />
                    <Card name="Anil Patel" icon="AP" iconBg="ap-bg" role="Electrician" status="On Site" exp="6 yrs exp" loc="Pune" rate="₹1,100/day" btn="Hire" />
                    <Card name="Priya Group" icon="PG" iconBg="pg-bg" role="Labour Gang (15)" status="Available" exp="Group" loc="Chennai" rate="₹11K/day" btn="Connect" />
                </div>
            </section>
            <section className="jobContainer section-padding">
                <div className="section-header">
                    <div className="title-group">
                        <h3>Live Requirements</h3><br />
                        <h2>Work Available Now</h2>
                    </div>
                    <a href="#" className="view-all">View all →</a>
                </div>
                <article className="jobCard">
                    <h2>5 Masons needed — Residential Building (G+4)</h2>
                    <div className="job-details-row">
                        <p>📍 Bangalore, Whitefield</p>
                        <time>📅 Start: Immediate</time>
                        <p>⏳ 3 months</p>
                    </div>
                    <ul className="skills-row">
                        <li>Brickwork</li>
                        <li>Plastering</li>
                        <li>Block Masonry</li>
                    </ul>
                    <div className="footer-row">
                        <p className="urgent-badge">URGENT</p>
                        <strong>₹850/day/worker</strong>
                        <button type="button">Apply Now</button>
                    </div>
                </article>
                <article className="jobCard">
                    <h2>Electrical Supervisor — Commercial Complex</h2>
                    <div className="job-details-row">
                        <p>📍 Hyderabad, HITEC City</p>
                        <time>📅 Start: Jan 15</time>
                        <p>⏳ Permanent</p>
                    </div>
                    <ul className="skills-row">
                        <li>LV/HV</li>
                        <li>Panel Work</li>
                        <li>ITI Certified</li>
                    </ul>
                    <div className="footer-row">
                        <strong>₹35K/month</strong>
                        <button type="button">Apply Now</button>
                    </div>
                </article>
                <article className="jobCard">
                    <h2>Labour Contractor needed — Road Project (50 workers)</h2>
                    <div className="job-details-row">
                        <p>📍 Nagpur, NH44</p>
                        <time>📅 Start: This week</time>
                        <p>⏳ 6 months</p>
                    </div>
                    <ul className="skills-row">
                        <li>Road Work</li>
                        <li>Compaction</li>
                        <li>50+ Gang</li>
                    </ul>
                    <div className="footer-row">
                        <p className="urgent-badge">URGENT</p>
                        <strong>Negotiable</strong>
                        <button type="button">Bid Now</button>
                    </div>
                </article>
            </section>
        </div>
    );
}
export default WorkforcePlatform;
