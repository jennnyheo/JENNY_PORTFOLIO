import "./App.css";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import Aboutme from "./Pages/Aboutme";
import Intro from "./Pages/Intro";
import Project from "./Pages/Project";
import Education from "./Pages/Education";
import ProjectContents from "./Pages/ProjectContents";
import Contact from "./Pages/Contact";
import ProjectContents2 from "./Pages/ProjectContent2";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function App() {
  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -700))}>
            <span className="indexHeader">안녕하세요 반갑습니다. 😉</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Intro />
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "30px" }}>허희주 입니다</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={ZoomInScrollOut}>
            <span
              style={{ fontSize: "50px", color: "#898989", fontWeight: "600" }}
            >
              DEVELOPER
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={MoveOut(0, -100)}>
            <Aboutme />
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={FadeUp}>
            <Education />
          </Animator>
        </ScrollPage>
        <ScrollPage page={6}>
          <Animator animation={batch(Fade(), MoveOut(0, -500))}>
            <Project />
          </Animator>
        </ScrollPage>
        <ScrollPage page={7}>
          <Animator animation={FadeUp}>
            <ProjectContents />
          </Animator>
        </ScrollPage>
        <ScrollPage page={8}>
          <Animator animation={FadeUp}>
            <ProjectContents2 />
          </Animator>
        </ScrollPage>
        <ScrollPage page={9}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
            <Contact />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      {/* <div>
        <Contact />
      </div> */}
    </div>
  );
}

export default App;
