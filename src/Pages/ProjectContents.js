import React from "react";
import {
  AiFillIeCircle,
  AiFillProfile,
  AiOutlineCloudDownload,
  AiOutlineGithub,
} from "react-icons/ai";

const ProjectContents = () => {
  return (
    <div className="projectContentContainer">
      <div className="projectContent content1">
        <h2>Booking Accomodation Site</h2>
        <div className="divider-middle"></div>
        <span>Spring, MySQL, Javscript, MyBatis, CSS, Ajax</span>
        <p>
          스프링과 MySql DB를 사용하여, 숙소를 호스팅하고, 예약할 수 있는
          사이트를 제작하였습니다.
        </p>
        <p>index, host, mypage, search 페이지를 제작하였습니다</p>
        <p className="gitIcon">
          <a
            href="http://ec2-13-125-171-94.ap-northeast-2.compute.amazonaws.com/index.do"
            alt="사이트 이동"
          >
            <AiFillIeCircle />
          </a>
          <a href="https://drive.google.com/file/d/1jWufIiIETE0WJgnMlJLaTvZTDNfScc6x/view?usp=sharing">
            <AiOutlineCloudDownload />
          </a>
        </p>
      </div>
      <div className="projectContent content2">
        <h2>TODO LIST</h2>
        <div className="divider-middle"></div>
        <span>React, CSS, FireBase</span>
        <p>
          React를 기반으로, Firebase를 이용하여 TODO 리스트를 작성 할 수 있는
          사이트를 제작하였습니다
        </p>
        <p className="gitIcon">
          <a href="https://github.com/jennnyheo/todo-site">
            <AiOutlineGithub />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectContents;
