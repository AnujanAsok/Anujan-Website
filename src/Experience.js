import "./Experience.css";

const Experience = () => {
  const experience = [
    {
      company: "ABC Inc.",
      position: "Software Engineer",
      duration: "Jan 2020 - Present",
      description: "Description of role and responsibilities at ABC Inc.",
    },
    {
      company: "XYZ Corp.",
      position: "Web Developer",
      duration: "Jun 2018 - Dec 2019",
      description: "Description of role and responsibilities at XYZ Corp.",
    },
  ];

  return (
    <div className="experience">
      <h1>My Experience</h1>
      <ul>
        {experience.map((job, index) => (
          <li key={index} className="job">
            <h2>{job.company}</h2>
            <h3>{job.position}</h3>
            <p>{job.duration}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
