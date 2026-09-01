import placements from '../../data/placements.json';

function PlacementSection() {
  return (
    <section className="section section--gap placements" id="placements">
      <div className="container">
        <div className="placements__grid">
          <div>
            <h2 className="section__title">Career Excellence &amp; Placements</h2>
            <p className="placements__text">{placements.summary}</p>
            <div className="placements__stats">
              <div className="stat-card">
                <p className="stat-card__label">Average Package</p>
                <p className="stat-card__value">{placements.averagePackage}</p>
              </div>
              <div className="stat-card">
                <p className="stat-card__label">Highest Package</p>
                <p className="stat-card__value">{placements.highestPackage}</p>
              </div>
            </div>
          </div>

          <div className="partners-panel">
            <h4 className="partners-panel__title">Top Hiring Partners</h4>
            <div className="partners-grid">
              {placements.partners.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
            <div className="partners-banner">
              <span className="material-symbols-outlined">rocket_launch</span>
              <p>
                Over {placements.placementRate} placement rate for the {placements.batchYear} batch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacementSection;
