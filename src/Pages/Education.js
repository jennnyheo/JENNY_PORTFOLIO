import React from "react";

const Education = () => {
  return (
    <div>
      <div>
        <h1>Education</h1>
        <div className="divider-short"></div>
        <div className="education_First">
          <h3>국비지원 파이썬 & 자바 개발자 과정</h3>
          <span>2021.04 - 2021.10</span>
          <p>
            보다 전문적이고 집중적으로 프로그래밍을 배우기 위해 수강하게
            되었습니다.
          </p>
          <div>
            <span>
              Oracle, Java, JavaFX, spring, HTML, CSS, JavaScript, spring boot,
              MySql, JSP
            </span>
          </div>
        </div>
        <div className="education-Second">
          <h3>한림대학교 / 국제학부(글로벌 비즈니스 학과)</h3>
          <span>2014.03 - 2019.09</span>
        </div>
        <div className="education-Thrid">
          <h3>대련 이공대학교 (중국, 대련)</h3>
          <span>2019.09 - 2020.07 </span>
          <p>공자 장학생으로 선발되어 1년간 중국어 연수를 받았습니다.</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
