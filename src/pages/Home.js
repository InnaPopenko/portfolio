import Header from "./../components/header/Header";

const Home = () => {
    return (  
    <>
     <Header />
        <main class="section">
         <div class="container">
            <h1 class="title-1">Skills</h1>
             <ul class="content-list">
                <li class="content-list__item">
                    <h2 class="title-2">Frontend </h2>
                    <p> JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, Vite, TailwindCSS, StyledComponents</p>        
                </li>
                <li class="content-list__item">
                    <h2 class="title-2">Backend</h2>
                    <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>        
                </li>
             </ul>
         </div>
        </main>
    </>
 );
}
 
export default Home;