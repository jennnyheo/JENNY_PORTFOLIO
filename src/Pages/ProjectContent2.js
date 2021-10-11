import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectContents2 = () => {
  return (
    <div className="projectContentContainer">
      <div className="projectContent content3">
        <h2>JAVASCRIPT 그림판</h2>
        <div className="divider-middle"></div>
        <span>JavaScript, CSS</span>
        <p>JavaScript의 canvas를 이용하여 간단한 그림판을 제작하였습니다</p>
        <p className="gitIcon">
          <a href="https://github.com/jennnyheo/Paint_js">
            <AiOutlineGithub />
          </a>
        </p>
      </div>
      <div className="projectContent content4">
        <h2>Blog</h2>
        <div className="divider-middle"></div>
        <span>React, MongoDB, Express</span>
        <p>
          MongoDB를 사용하여 간단한 CRUD가 가능한 블로그 게시판을 제작하였습니다
        </p>
        <p className="gitIcon">
          <AiOutlineGithub />
        </p>
      </div>
    </div>
  );
};

export default ProjectContents2;
