import { Animator, MoveIn, MoveOut } from "react-scroll-motion";

const Intro = () => {
  return (
    <div>
      <div class="Intro">
        <Animator animation={MoveIn(300, 100)}>
          <span style={{ fontSize: "30px" }}> 끊임없이 도전하는 개발자 </span>
        </Animator>
        <Animator animation={MoveIn(-300, 100)}>
          <span style={{ fontSize: "30px" }}> 끊임없이 발전하는 개발자 </span>
        </Animator>
      </div>
    </div>
  );
};

export default Intro;
