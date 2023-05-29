

import todolist from './../../img/projects/todolist.jpg';
import weather1 from './../../img/projects/weather1.jpg';
import online from './../../img/projects/online.jpg';
import colors from './../../img/projects/colors.jpg';
import weather5d from './../../img/projects/weather5d.jpg';
import prodject from './../../img/projects/project.jpg';


import Header from '../header/Header';



const Project = () => {
    return ( 
        <>
         <Header />

            <main className="section">
                <div className="container">
                    <h2 className="title-1">Prodject</h2>
                    <ul className="projects">
                        <a href="./projects/todo-list.html">
                        <li className="project">
                            <img src={todolist} alt="project img" className="project__img" />
                            <h3 className="project__title">Todo List</h3>
                        </li>
                        </a>
                        <a href="./projects/weather.html">
                        <li className="project">
                            <img src={weather1} alt="Weather" className="project__img" />
                            <h3 className="project__title">Weather</h3>
                        </li>
                        </a>
                        <a href="./projects/project-one.html">
                        <li className="project">
                            <img src={online} alt="Project" className="project__img"/>
                            <h3 className="project__title">Online Busines</h3>
                        </li>
                        </a>
                        <a href="./projects/colors.html">
                        <li className="project">
                            <img src={colors} alt="project img" className="project__img" />
                            <h3 className="project__title">Color copy</h3>
                        </li>
                        </a>
                        <a href="./projects/weather-react.html">
                        <li className="project">
                            <img src={weather5d} alt="project img" className="project__img" />
                            <h3 className="project__title">Weather for 5 days</h3>
                        </li>
                        </a>
                        <a href="./projects/project-page.html">
                        <li className="project">
                            <img src={prodject} alt="project img" className="project__img" />
                            <h3 className="project__title">My Portfolio</h3>
                        </li>
                        </a>
                    </ul>
                </div>

            </main>
        </>
     );
}
 
export default Project;