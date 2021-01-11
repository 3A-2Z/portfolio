import {Component, useEffect,useState} from 'react';
import './assets/css/main.css'
const Projects = () => {
    const [projects,setProjects] = useState([])
    useEffect(
        () => fetch('http://portfolioprojectapi-env.eba-jxm8s5sp.us-east-1.elasticbeanstalk.com//git/proj').then(res => res.json())
        .then(proJson => setProjects(prev => proJson)), []

    )
    
    return (projects.map(project => 
        <article class="col-6 col-12-xsmall work-item">
            <div class="center">
            <ul class="actions">
			<li><a href={project.url} class="button">View</a></li>
            </ul>
            </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
		</article>
        
        )  
        
        
        
        
        )
}
export default Projects;   