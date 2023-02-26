import React from 'react'
import {HiArrowCircleDown} from 'react-icons/hi'
import Images from '../images/index'
import {NavLink, Link} from 'react-router-dom'
import ModalForm from './ModalForm'
import {TbBuildingWarehouse} from 'react-icons/tb'
// import '../Fireworks.css'


const Header = ()=>{

// 	const [fireworks, setFireworks] = useState([]);

  // function handleFire(event) {
  //   // Prevent the default link behavior
  //   event.preventDefault();

  //   // Add the fireworks animation elements to the state
  //   const fireworksElements = [];
  //   for (let i = 0; i < 20; i++) {
  //     fireworksElements.push(
  //       <div
  //         key={i}
  //         className="firework"
  //         style={{
  //           left: `${Math.random() * 100}%`,
  //           top: `${Math.random() * 100}%`,
  //           animationDelay: `${Math.random() * 0.5}s`,
  //         }}
  //       />
  //     );
  //   }
    
  //   setFireworks(fireworksElements);

  //   // Remove the fireworks animation elements after the animation completes
  //   setTimeout(() => {
  //     setFireworks([]);
  //   }, 1000);
  // }


	return (
	
<nav id="nav">

		<input type="checkbox" id="toggler"/>

		<div className="nav-container">
			<Link to='/' className="logo"><img src={Images.logo}/></Link>
			<Link to='/' className="nav-brandy">JH Pro</Link>
		
			<ul className="nav-ul">

				<li className="ul-items"><NavLink to='/'>Home</NavLink></li>
	
				<li className="ul-items"><NavLink to='/designs'>Designs</NavLink><HiArrowCircleDown/>
					<ul className="ul1-drop">
						<li className="ul1-items">
							<ul className="design-section1">
								<li className="section1">Table</li>
								<li className="section1"><a href="#">Quasis four seater</a></li>
								<li className="section1"><a href="#">Table mate</a></li>
								<li className="section1"><a href="#">Multipurpose Coffe Table</a></li>
								<li className="section1"><a href="#">Osca Center Table</a></li>
							</ul>
							<ul className="design-section2">
								<li className="section2">Chair</li>
								<li className="section2"><a href="#">Back Rest</a></li>
								<li className="section2"><a href="#">Ventilation Support</a></li>
								<li className="section2"><a href="#">Chair Back Support</a></li>
								<li className="section2"><a href="#">Office Chair</a></li>
							</ul>
							
						</li>
						<li className="ul2-items">
							<ul className="design-right1">
								<li className="right1">Roof</li>
								<li className="right1"><a href="#">Tile Roof</a></li>
								<li className="right1"><a href="#">Rib Type</a></li>
								<li className="right1"><a href="#">Mini Rib</a></li>
								<li className="right1"><a href="#">Asphalt Shingles</a></li>
							</ul>
							<ul className="design-right2">
								<li className="right2">Cladding</li>
								<li className="right2"><a href="#">Fluted Panels</a></li>
								<li className="right2"><a href="#">PVC ceilings</a></li>
								<li className="right2"><a href="#">WPC cladding</a></li>
								<li className="right2"><a href="#">SPC cladding</a></li>
							</ul>
							
						</li>
					</ul>
				</li>


				<li className="ul-items"><NavLink to='/projects'>Projects</NavLink><HiArrowCircleDown/>
					<ul className="project-position">
		
						<li className="position1">
							<ul className="projects-title">
								<li className="project-item1">*Finish Project by JH Pro Builders*</li>
								<li className="project-item1">A once-in-a-lifetime project deserves timeless construction.
								</li>
							</ul>
							<ul className="projects-images">
								<li className="project-img">
									<img src={Images.d1} className="d-img"/>
									<h5>Smantha Green</h5>
									<a href="#">Read More <img src={Images.arrow} className="arrow"/></a>
								</li>
								<li className="project-img">
									<img src={Images.d2} className="d-img"/>
									<h5>Stucco White</h5>
									<a href="#">Read More <img src={Images.arrow} className="arrow"/></a>
								</li>
								<li className="project-img">
									<img src={Images.d3} className="d-img"/>
									<h5>Office White</h5>
									<a href="#">Read More <img src={Images.arrow}className="arrow"/></a>
								</li>
								<li className="project-img">
									<img src={Images.d4} className="d-img"/>
									<h5>Minimal White</h5>
									<a href="#">Read More <img src={Images.arrow} className="arrow"/></a>
								</li>
								<li className="project-img">
									<img src={Images.d5} className="d-img"/>
									<h5>Vintage Brown</h5>
									<a href="#">Read More <img src={Images.arrow} className="arrow"/></a>
								</li>
								<li className="project-img">
									<img src={Images.d6} className="d-img"/>
									<h5>Blue Reflict</h5>
									<a href="#">Read More <img src={Images.arrow} className="arrow"/></a>
								</li>
								<li className="project-img">
									<img src={Images.d7} className="d-img"/>
									<h5>Stone Bar</h5>
									<a href="#">Read More <img src={Images.arrow} className="arrow"/></a>
								</li>
								<li className="project-img">
									<img src={Images.d8} className="d-img"/>
									<h5>Summer Beige</h5>
									<a href="#">Read More <img src={Images.arrow} className="arrow"/></a>
								</li>
							</ul>
						</li>
	
					</ul>

				</li>

				<li className="ul-items"><a href="#home4">About </a></li>
		
				<li className="ul-items"><label htmlFor="modal" className="nav-contact-btn"><TbBuildingWarehouse/> Inquiry</label></li>

			</ul>
	
			<span></span>
				

			<label className="label" htmlFor="toggler">
				<span className="label-items"></span>
				<span className="label-items"></span>
				<span className="label-items"></span>
			</label>

		</div>
	</nav>

		)
}

export default Header