import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import resume from './resume.pdf';

function App() {
  
  return (
    <div className="App">
     	<body class="is-preload">
      
			<header id="header">
				<div class="inner">
					<a href="#" class="image avatar"><img src="images/avatar.jpg" alt="" /></a>
					<h1>Coding and debugging through<br />
					the trials and tribulations.<br />
					</h1>
				</div>
			</header>

			<div id="main">

					<section id="one">
						<header class="major">
							<h2>Aziz Amino</h2>
						</header>
						<p>I am a budding software developer with a B.S. Computer Science and an eagerness to learn new technologies. I can be contacted by phone (703-835-2216) or email at aamino@gmu.edu</p>
            <div class = "center">
						<ul class="actions">
              
							<li><a href={resume} target = "_blank" class="button">Download Resume</a></li>
             
						</ul>
            </div>
					</section>

					<section id="one">
						<h2>Projects</h2>
						<div class="row">
							<Projects />
						</div>
					
					</section>

					

			
			</div>

			<footer id="footer">
				<div class="inner">
					
				</div>
			</footer>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
    </div>
  );
}

export default App;
