import Container from 'react-bootstrap/esm/Container';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './about.css';

function About() {
	return (
		<Container className="aboutContainer">
			<div className="biblioDiv">
				<h2>Bibliography</h2>
				<h6>
					If you want to know more about other worlds and who can see them:
				</h6>
				<a href="https://edyong.me/an-immense-world">
					<i>
						An Immense World: How Animal Senses Reveal the Hidden Realms Around
						Us
					</i>
					, by Ed Yong
				</a>
				<br />
				<a href="https://www.geekslop.com/science-and-history/science/general-science/2014/how-different-animals-see-the-world-around-them">
					How different animals see the world around them
				</a>
				<br />
				<a href="https://howitsee.com/how-do-whales-see/">
					How do Whales see the world and underwater?
				</a>
				<br />
				<a href="https://www.bbc.com/news/science-environment-11971274">
					Database shows how bees see world in UV
				</a>
				<br />

				<a href="https://www.nhm.ac.uk/discover/how-do-other-animals-see-the-world.html">
					How do other animals see the world
				</a>
				<br />
				<a href="https://www.discoverwildlife.com/animal-facts/animal-vision-how-do-animals-see/">
					Animal vision: how do animals see?
				</a>
			</div>

			<div className="creditsDiv">
				<h2>Credits</h2>
				<h4>Pictures</h4>

				<p>
					All other random images are fetched through{' '}
					<a href="https://www.livescience.com/62513-photos-amazing-animal-eyes.html">
						Pixabay API{' '}
					</a>
				</p>
				<p>
					{' '}
					<span>Pablita the jumping spider's picture come from </span>
					<a href="https://www.livescience.com/62513-photos-amazing-animal-eyes.html">
						Live Science Website
					</a>
					<span> (Image credit: Shutterstock)</span>
				</p>
				{/* APIs!!!! */}
				<h4>Icons</h4>
				<p>
					All the icons come from{' '}
					<a href="https://www.flaticon.com" title="flat icons">
						flaticon
					</a>
					, in particular:
				</p>
				<span>Cat icon: </span>
				<a href="https://www.flaticon.com/free-icons/cat" title="cat icons">
					Cat icons created by Freepik - Flaticon
				</a>
				<br />
				<span>Bee icon: </span>
				<a href="https://www.flaticon.com/free-icons/bee" title="bee icons">
					Bee icons created by Freepik - Flaticon
				</a>
				<br />

				<span>Cow icon: </span>
				<a href="https://www.flaticon.com/free-icons/cow" title="cow icons">
					Cow icons created by Flat Icons - Flaticon
				</a>
				<br />
				<span>Whale icon: </span>
				<a
					href="https://www.flaticon.com/free-icons/animal"
					title="animal icons">
					Animal icons created by Freepik - Flaticon
				</a>
			</div>
			{/* <p><span>Pablita's speech bubble was created with the help of	</span>

  <a href="https://www.youtube.com/channel/UCtVM2RthR4aC6o7dzySmExA"> Coding Market</a>
 </p>*/}
		</Container>
	);
}

export default About;
