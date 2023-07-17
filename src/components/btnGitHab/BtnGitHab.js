import gitHubIcon from './gitHub-black.svg'
import './style.css'

 
const BtnGitHab = ({ link }) => {
    return ( 
        <a href={link} target="_blank" rel='noreferrer' className="btn-outline">
             <img src={gitHubIcon} alt="gitHab"/>  GitHub repo
        </a> 
     );
}
 
export default BtnGitHab;