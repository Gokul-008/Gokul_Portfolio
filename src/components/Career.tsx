import "./styles/Career.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  if (period.includes(" - ") || period.includes(" – ")) {
    const parts = period.split(/ – | - /);
    return parts[0];
  }
  return period;
};

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Education Item */}
          {config.education && (
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{config.education.degree}</h4>
                  <h5>{config.education.institution}</h5>
                </div>
                <h3>2022</h3>
              </div>
              <div className="career-details">
                <p><strong>Period:</strong> {config.education.period}</p>
                <p><strong>CGPA:</strong> {config.education.cgpa}</p>
                <p><strong>Coursework:</strong> {config.education.coursework.join(", ")}</p>
              </div>
            </div>
          )}

          {/* Experience Item */}
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{getDisplayYear(exp.period)}</h3>
              </div>
              <div className="career-details">
                <p>{exp.description}</p>
                {exp.responsibilities && (
                  <ul className="career-bullets">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Certifications Item */}
          {config.certifications && config.certifications.length > 0 && (
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Certifications</h4>
                  <h5>Verified Credentials</h5>
                </div>
                <h3>CERT</h3>
              </div>
              <div className="career-details">
                <ul className="career-bullets">
                  {config.certifications.map((cert, cIndex) => (
                    <li key={cIndex}>
                      <strong>{cert.title}</strong> — {cert.issuer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;

