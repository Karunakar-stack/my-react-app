import React from 'react';

function Workerssection() {
  return (
    <section>
            <div>
                <h3>Every role, one platform</h3>
                <h2>All Workers</h2>
                <a href="#" className="view-all">View all →</a>
            </div>
            <div className="tabs">
                <button>Skilled</button>
                <button>Semi-skilled</button>
                <button>Contractors</button>
                <button>Agencies</button>
            </div>
            <div className="role-grid">
                <article className="role-box">
                    <div>🧱</div>
                    <h3>Mason</h3>
                    <p>4,210 available</p>
                </article>
                <article className="role-box">
                    <div>🪚</div> 
                    <h3>Carpenter</h3>
                    <p>2,880 available</p>
                </article>
                <article className="role-box">
                    <div>⚡</div>
                    <h3>Electrician</h3>
                    <p>3,100 available</p>
                </article>
                <article className="role-box">
                    <div>🔧</div>
                    <h3>Plumber</h3>
                    <p>1,950 available</p>
                </article>
                <article className="role-box">
                    <div>🏗</div>
                    <h3>Steel Fixer</h3>
                    <p>1,640 available</p>
                </article>
                <article className="role-box">
                    <div>🎨</div>
                    <h3>Painter</h3>
                    <p>2,200 available</p>
                </article>
                <article className="role-box">
                    <div>👷</div>
                    <h3>Supervisor</h3>
                    <p>890 available</p>
                </article>
                <article className="role-box">
                    <div>🏢</div>
                    <h3>L. Contractor</h3>
                    <p>430 registered</p>
                </article>

            </div>
        </section>
  )
}

export default Workerssection
