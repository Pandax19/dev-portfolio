
import Face from "../../assets/images/my-face.jpg";

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <div className="card about-card">
        <div className="card-image">
          <figure className="image me">
            <img src={Face} />
          </figure>
        </div>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-center"></div>
          <div className="media-content">
            <p className="title">
              Hello! My name is Amanda. I'm from South Jersey and I'm excited to
              start my career in coding as a Full Stack Web Developer.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
