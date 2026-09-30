function Skills() {
  const skills = [
    {
      name: "C",
      description: "Programming"
    },
    {
      name: "C++",
      description: "Programming"
    },
    {
      name: "Java",
      description: "OOP & GUI"
    },
    {
      name: "Python",
      description: "Programming"
    },
    {
      name: "HTML",
      description: "Web Development"
    },
    {
      name: "CSS",
      description: "Web Design"
    },
    {
      name: "JavaScript",
      description: "Web Development"
    },
    {
      name: "React",
      description: "Frontend"
    }
  ];

  return (
    <section className="page skills-page">

      <div className="page-heading">
        <h1>SKILLS</h1>

        <p>
          Technologies and programming languages I have learned and worked with.
        </p>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;