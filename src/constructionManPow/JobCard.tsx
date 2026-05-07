import React from 'react'

function JobCard() {
  return (
    <>
      <section className="jobContainer">
        <div className="section-header">
    <div className="title-group">
        <h3>Live Requirements</h3>
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
          <p>URGENT</p>
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
    </>
  )
}

export default JobCard