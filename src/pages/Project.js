import { useParams } from 'react-router-dom';
import BtnGitHab from '../components/btnGitHab/BtnGitHab';
import  {projects} from './../helpers/projectsList'

const Project = () => {
    const {id} = useParams ();
    const project = projects[id];

    return (
        <main className="section">
        <div className="container">
            <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

                <img 
                src={project.img} 
                alt={project.title} 
                className="proect-detalils__cover" 
                />

           <div className="proect-detals__desc">
             <p>Skills: {project.skills}</p>
           </div>
 
            {project.gitHabLink && (
               <BtnGitHab link='https://github.com/InnaPopenko' />
            )}
            </div>
        </div>
    </main>
    );
}
 
export default Project;