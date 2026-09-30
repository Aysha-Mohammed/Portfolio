function Profile() {
  return (
    <section className="profile-page">

      <div className="profile-content">

        {/* LEFT SIDE */}
        <div className="profile-text">

          <div className="top-content">

            <h1 className="profile-title">
              COMPUTER SCIENCE STUDENT
            </h1>

            <div className="title-line"></div>

            <p className="profile-description">
              I am a Computer Science student passionate about
              programming, software development, and modern
              technology. I enjoy learning new technologies and
              building creative projects that solve real-world
              problems.
            </p>

            <div className="contact-info">

              <p className="contact-title">
                CONTACT:
              </p>

              <p>
                ayshamd@gmail.com
              </p>

              <p>
                +880 1632849463
              </p>

            </div>

          </div>


          {/* BOTTOM NAME */}
          <div className="big-name">

            <div>HI, I AM</div>

            <div>AYSHA</div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="profile-image-container">

          <div className="image-circle"></div>

          <img
            src="/profile.jpg"
            alt="Aysha"
            className="profile-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Profile;