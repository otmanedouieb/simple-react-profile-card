import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="profile-card">
      <Avatar />
      <Info />
      <Skills />
    </div>
  );
}

function Avatar() {
  return <img src="https://via.placeholder.com/300x200" alt="avatar" />;
}

function Info() {
  return (
    <div className="info">
      <h2>John Doe</h2>
      <p>Web Developer | Tech Enthusiast</p>
    </div>
  );
}

function Skill(props) {
  return (
    <span className="skill-tag">
      {props.name} {props.imoji}
    </span>
  );
}

function Skills() {
  return (
    <div class="skills">
      <h3>Skills</h3>
      <Skill name="HTML" imoji="💻" />
      <Skill name="CSS" imoji="🎨" />
      <Skill name="JavaScript" imoji="💻" />
      <Skill name="React" imoji="🛠️" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
