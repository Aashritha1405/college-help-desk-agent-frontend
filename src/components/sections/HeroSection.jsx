const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAi-RhMSSC3KzIVGrHM23Yv4Va3F6I1b5aPzcReLAtHRL716hwmTvLOgCs96ZyVqtAy-5uVK7lCaraHP6Nf0ZYLeftNxK5lMEPIKVo_IgENBkEntCjrqnqCZWIGSepxjcGcU1zE-V0v0PVwFq_BFOrLDRV9sqcSydARhhqAc8RZ0CdA5JCdkVqiyXV3siJLSnn5ljpzrBKPt8oErXICjXq6BAwTUDIe_33d9wdHG4M9f_WQ4xE1Dg7_Tj-zpCBq08sjBGOvnd0KFbLg';

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="badge">Intelligent Guidance</span>
          <h1 className="hero__title">Your Academic Journey Starts Here</h1>
          <p className="hero__text">
            Navigate the complexities of university life with EduQuery. Our AI-powered help desk
            provides instant clarity on courses, admissions, and careers, tailored specifically for
            your future.
          </p>
          <div className="hero__actions">
            <a href="#courses" className="btn btn-primary btn-lg">
              Explore Programs
            </a>
            <a href="#admissions" className="btn btn-ghost btn-lg">
              View Admission Guide
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__image-wrap">
            <img
              src={HERO_IMAGE}
              alt="Students collaborating in a modern campus lounge"
            />
          </div>
          <div className="hero__cred-badge">
            <div className="hero__cred-icon">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p>UGC Accredited</p>
              <p>Top Tier Institution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
