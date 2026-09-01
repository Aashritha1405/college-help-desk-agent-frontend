import courses from '../../data/courses.json';

function CoursesSection() {
  return (
    <section className="section section--gap section--white" id="courses">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Popular Programs</h2>
          <p className="section__subtitle">
            Discover market-leading courses designed to transform you into a future-ready professional.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <div className={`course-card__icon course-card__icon--${course.accent}`}>
                <span className="material-symbols-outlined">{course.icon}</span>
              </div>
              <span className={`course-card__category course-card__category--${course.accent}`}>
                {course.category}
              </span>
              <h3 className="course-card__title">{course.title}</h3>
              <p className="course-card__desc">{course.description}</p>
              <button type="button" className="course-card__link">
                Learn More
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
