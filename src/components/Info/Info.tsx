import "./Info.scss";

const Info = () => {
  return (
    <section className="cvWrap">
      <div className="infoWrap">
        <h2 className="infoWrap__name">SERGEY VOITKEVICH</h2>
        <h3 className="infoWrap__proff">JAVASCRIPT DEVELOPER</h3>
      </div>
      <div className="infoSection">
        <h3 className="infoSection__name profSkills">PROFESSIONAL SKILLS</h3>
        <p className="infoSection__text">
          I have strong knowledge of CSS, HTML, JavaScript, TypeScript. I have
          experience with the React ecosystem (React.js, React-Redux, Redux
          Thunk, Redux-Saga, Hooks, React-Router). I also worked with the
          backend part on node.js (Express.js, PostgreSQL, MongoDB, Socket.io).
          I have good analytical skills. I learn easily. I work well in a team.
        </p>
        <ul className="infoSection__iconsList">
          <li className="infoSection__icon icon__html"></li>
          <li className="infoSection__icon icon__css"></li>
          <li className="infoSection__icon icon__js"></li>
          <li className="infoSection__icon icon__react"></li>
          <li className="infoSection__icon icon__redux"></li>
          <li className="infoSection__icon icon__api"></li>
          <li className="infoSection__icon icon__nodeJs"></li>
          <li className="infoSection__icon icon__git"></li>
        </ul>
      </div>
      <div className="infoSection">
        <h3 className="infoSection__name language">LANGUAGES</h3>
        <ul className="infoSection__jobsList jobsList">
          <li className="jobsList__item job">
            <span className="job__year">English</span>
            <span className="job__name">B1</span>
            <p className="job__info">
              Understanding the main topics that are regularly encountered at
              work, on vacation, etc. The ability to communicate in most
              situations that may arise in everyday life. The ability to compose
              simple connected text on topics that are familiar or of interest.
            </p>
          </li>
          <li className="jobsList__item job">
            <span className="job__year">Belarusian</span>
            <span className="job__name">Native</span>
          </li>
          <li className="jobsList__item job">
            <span className="job__year">Russian</span>
            <span className="job__name">Native</span>
          </li>
        </ul>
      </div>
      <div className="infoSection">
        <h3 className="infoSection__name work">WORK</h3>
        <ul className="infoSection__jobsList jobsList">
          <li className="jobsList__item job">
            <span className="job__year">2019</span>
            <span className="job__name">Engineer</span>
            <span className="job__organization">
              RUE "Mogilevenergo" branch "Bobruisk electrical networks"
            </span>
            <p className="job__info">
              Telemechanization of substations, maintenance of communication
              channels with substations, support of the SCADA telemechanics
              system.
            </p>
          </li>
          <li className="jobsList__item job">
            <span className="job__year">2021</span>
            <span className="job__name">JavaScript developer</span>
            <span className="job__organization">VironIT</span>
            <p className="job__info">
              Development of projects for outsourcing, mainly front-end using
              the React.JS ecosystem.
            </p>
          </li>
        </ul>
      </div>
      <div className="infoSection">
        <h3 className="infoSection__name education">EDUCATION/COURSES</h3>
        <p className="infoSection__text">
          I graduated from the Belarusian State University of Informatics and
          Radioelectronics with a degree in information technology and control
          in technical systems. After that, during my first job, I decided to
          change the field of activity. And successfully completed courses in
          JavaScript development.
        </p>
        <ul className="infoSection__jobsList jobsList">
          <li className="jobsList__item job">
            <span className="job__year">2015 - 2019</span>
            <span className="job__name">
              Information technology and management engineer
            </span>
            <span className="job__organization">
              Belarusian State University of Informatics and Radioelectronics
            </span>
          </li>
          <li className="jobsList__item job">
            <span className="job__year">2021</span>
            <span className="job__name">Front-End React developer</span>
            <span className="job__organization">Senla</span>
          </li>
        </ul>
      </div>
      <div className="infoSection">
        <h3 className="infoSection__name projects">PROJECTS</h3>
        <ul className="infoSection__jobsList jobsList">
          <li className="jobsList__item job project">
            <span className="job__year">Social Network</span>
            <span className="job__name">Full Stack Developer</span>
            <span className="job__organization">
              JavaScript, React, Redux, Formik, Node.js, Express.js, JWT,
              Socket.io, PostgreSQL
            </span>
            <p className="job__info">
              Social network with all basic features: <br />- Authorization via
              JWT; <br />- CRUD friends, posts, comments, likes; <br />- Uploud
              media; <br />- Chat implemented via Socket.io
            </p>
            <a
              className="project__link1"
              href="https://github.com/v0idman7/SocialNetwork/tree/devClient/Client"
            >
              Client Side
            </a>
            <a
              className="project__link2"
              href="https://github.com/v0idman7/SocialNetwork/tree/devServer/Server"
            >
              Server Side
            </a>
          </li>
          <li className="jobsList__item job project">
            <span className="job__year">Film Gallery</span>
            <span className="job__name">Front-End Developer</span>
            <span className="job__organization">
              JavaScript, React, Redux, Formik
            </span>
            <p className="job__info">
              Web application that allows the user to select a movie to watch.
              The user can sort movies in different parameters and see:
              information about the films, posters, trailers. Each authorized
              user can set the film rating and give feedback. An application
              administartor can change the description of the film, as well as
              add and delete movies.
            </p>
            <a
              className="project__link1"
              href="https://github.com/v0idman7/FilmGalleryReact"
            >
              GitHub
            </a>
          </li>
          <li className="jobsList__item job project">
            <span className="job__year">To Do List</span>
            <span className="job__name">Front-End Developer</span>
            <span className="job__organization">JavaScript, React, Redux</span>
            <p className="job__info">
              To Do List with features such as: CRUD list items, the ability to
              add an item to favorites, tabs for sorting items, searching for
              items.
            </p>
            <a
              className="project__link1"
              href="https://github.com/v0idman7/ToDoList/tree/dev"
            >
              GitHub
            </a>
          </li>
          <li className="jobsList__item job project">
            <span className="job__year">Save Life</span>
            <span className="job__name">Front-End Developer</span>
            <span className="job__organization">HTML, CSS, JS</span>
            <p className="job__info">
              Website layout for the charitable public association for the
              protection of animals "SAVE LIFE"
            </p>
            <a
              className="project__link1"
              href="https://github.com/v0idman7/Project_for_SENLA"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="infoSection">
        <h3 className="infoSection__name hobbies">HOBBIES</h3>
        <ul className="infoSection__hobbiesList hobbiesList">
          <li className="hobbiesList__icon hobbiesList__travel"></li>
          <li className="hobbiesList__icon hobbiesList__fishing"></li>
          <li className="hobbiesList__icon hobbiesList__guitar"></li>
          <li className="hobbiesList__icon hobbiesList__film"></li>
        </ul>
      </div>
    </section>
  );
};

export default Info;
