import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experiences.scss";
const Experiences = () => {
  return (
    <section id="experiences">
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      {/* if you want to add "Backend Section just copy and paste and change "1fr to 1fr 1fr" in scss */}

      <div className="container experience_container">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
            <div>
              <h4>HTML</h4>
            </div>
          </article>
          <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
            <div>
              <h4>CSS</h4>
            </div>
          </article>
          <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
            <div>
              <h4>Tailwind</h4>
            </div>
          </article>
          <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
            <div>
              <h4>Bootstrap</h4>
            </div>
          </article>
          <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
            <div>
              <h4>Javascript</h4>
            </div>
          </article>
          <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
            <div>
              <h4>ReactJs</h4>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
