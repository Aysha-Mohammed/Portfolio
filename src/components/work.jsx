function Work() {
  const projects = [
    {
      title: "Bluetooth Controlled Robot Car",
      description:
        "A Bluetooth-controlled robot car developed using Arduino and a motor driver.",
      technology: "Arduino • C++"
    },

    {
      title: "Phishing Email Detector",
      description:
        "A desktop application designed to identify potentially harmful phishing emails.",
      technology: "Python • Tkinter • SQLite"
    },

    {
      title: "Word Count Application",
      description:
        "A Java Swing application that counts the number of words in a given text.",
      technology: "Java • Swing"
    }
  ];

  return (
    <section className="page work-page">

      <div className="page-heading">
        <h1>WORK</h1>

        <p>
          Some of the projects I have worked on.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>

            <span className="project-number">
              0{index + 1}
            </span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="technology">
              {project.technology}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Work;