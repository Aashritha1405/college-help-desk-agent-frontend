import admissions from '../../data/admissions.json';

function AdmissionsSection() {
  return (
    <section className="section section--gap" id="admissions">
      <div className="container">
        <div className="admissions__grid">
          <div>
            <h2 className="section__title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              Seamless Admission Process
            </h2>
            <div className="admission-steps">
              {admissions.steps.map((step) => (
                <div key={step.number} className="admission-step">
                  <div className="admission-step__num">{step.number}</div>
                  <div>
                    <h4 className="admission-step__title">{step.title}</h4>
                    <p className="admission-step__desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-panel" id="faqs">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-list">
              {admissions.faqs.map((faq) => (
                <details key={faq.id} className="faq-item">
                  <summary>
                    {faq.question}
                    <span className="material-symbols-outlined">expand_more</span>
                  </summary>
                  <div className="faq-item__answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsSection;
