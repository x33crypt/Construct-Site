import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="ProjectsTop">
        <div className="ProjectsTop1">
          <p className="ProjectsButtom1Head">RESIDENTIAL</p>
          <i id="whiteProj" class="fa-solid fa-folder fa-flip-horizontal"></i>
          <div id="whiteProjMain" className="ProjectsButtom1Main">
            <p className="ProjectsButtom1Main1">264</p>
            <p className="ProjectsButtom1Main2">Projects</p>
            <div className="ProjectsButtom1Main3"></div>
            <p className="ProjectsButtom1Main4">
              264 homes transformed with care.
            </p>
          </div>
        </div>
        <div className="ProjectsTop2">
          <div className="ProjectsTop2">
            <p className="ProjectsButtom1Head">COMMERCIAL</p>
            <i class="fa-solid fa-folder fa-flip-horizontal"></i>
            <div className="ProjectsButtom1Main">
              <p className="ProjectsButtom1Main1">385</p>
              <p className="ProjectsButtom1Main2">Projects</p>
              <div className="ProjectsButtom1Main3"></div>
              <p className="ProjectsButtom1Main4">
                385 commercial spaces brought to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectsButtom">
        <div className="ProjectsButtom1">
          <p className="ProjectsButtom1Head">RENOVATION</p>
          <i class="fa-solid fa-folder fa-flip-horizontal"></i>
          <div className="ProjectsButtom1Main">
            <p className="ProjectsButtom1Main1">173</p>
            <p className="ProjectsButtom1Main2">Projects</p>
            <div className="ProjectsButtom1Main3"></div>
            <p className="ProjectsButtom1Main4">
            173 homes successful renovations and counting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
