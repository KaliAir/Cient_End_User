import React from 'react'
import {HiArrowCircleDown} from 'react-icons/hi'
import Images from '../images/index'
import {NavLink, Link} from 'react-router-dom'
import {TbBuildingWarehouse} from 'react-icons/tb'
import {useImages} from '../Context/ImagesContext'



const Header = ()=>{

    const {handleShow,handleChairs,handleRoof,handleCladding} = useImages()


    const toggleMenu = ()=>{
    	let toggler = document.querySelector('#toggler');
    	toggler.checked = !toggler.checked;
    }

	return (
	
<nav id="nav">

		<input type="checkbox" id="toggler"/>

		<div className="nav-container">
			<Link to='/' className="logo"><img src={Images.logo} alt=''/></Link>
			<Link to='/' className="nav-brandy">JH Pro</Link>
		
			<ul className="nav-ul">

				<li className="ul-items"><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
	
				<li className="ul-items"><NavLink to='/designs' onClick={toggleMenu}>Designs</NavLink><HiArrowCircleDown/>
					<ul className="ul1-drop">
						<li className="ul1-items">
							<ul className="design-section1">
								<li className="section1">Table</li>
								<li className="section1"><Link to='/tables' onClick={()=>handleShow('table2','Quasis four seater')}>Quasis four seater</Link></li>
								<li className="section1"><Link to='/tables' onClick={()=>handleShow('table7','Table mate')}>Table mate</Link></li>
								<li className="section1"><Link to='/tables' onClick={()=>handleShow('table9','Multipurpose Coffe Table')}> Multipurpose Coffe Table</Link></li>
								<li className="section1"><Link to='/tables' onClick={()=>handleShow('table10','Osca Center Table')}> Osca Center Table</Link></li>
							</ul>
							<ul className="design-section2">
								<li className="section2">Chair</li>
								<li className="section2"><Link to='/chairs' onClick={()=>handleChairs('chair1','Back Rest')}> Back Rest</Link></li>
								<li className="section2"><Link to='/chairs' onClick={()=>handleChairs('chair8','Reading Chair')}> Reading Chair</Link></li>
								<li className="section2"><Link to='/chairs' onClick={()=>handleChairs('chair5','Chair Back Support')}> Chair Back Support</Link></li>
								<li className="section2"><Link to='/chairs' onClick={()=>handleChairs('chair4','Office Chair')}> Office Chair</Link></li>
							</ul>
							
						</li>
						<li className="ul2-items">
							<ul className="design-right1">
								<li className="right1">Roof</li>
								<li className="right1"><Link to='/roof' onClick={()=>handleRoof('roof4','Tile Roof')}> Tile Roof</Link></li>
								<li className="right1"><Link to='/roof' onClick={()=>handleRoof('roof2','Rib Type')}> Rib Type</Link></li>
								<li className="right1"><Link to='/roof' onClick={()=>handleRoof('roof3','Mini Rib')}> Mini Rib</Link></li>
								<li className="right1"><Link to='/roof' onClick={()=>handleRoof('roof7','Asphalt Shingles')}> Asphalt Shingles</Link></li>
							</ul>
							<ul className="design-right2">
								<li className="right2">Cladding</li>
								<li className="right2"><Link to='/cladding' onClick={()=>handleCladding('cladding4','Fluted Panels')}> Fluted Panels</Link></li>
								<li className="right2"><Link to='/cladding' onClick={()=>handleCladding('cladding5','PVC Floor')}> PVC Floor</Link></li>
								<li className="right2"><Link to='/cladding' onClick={()=>handleCladding('cladding1','WPC Cladding')}> WPC Cladding</Link></li>
								<li className="right2"><Link to='/cladding' onClick={()=>handleCladding('cladding2','SPC Cladding')}> SPC Cladding</Link></li>
							</ul>
							
						</li>
					</ul>
				</li>


				<li className="ul-items"><NavLink to='/projects' onClick={toggleMenu}>Projects</NavLink><HiArrowCircleDown/>
					<ul className="project-position">
		
						<li className="position1">
							<ul className="projects-title">
								<li className="project-item1">*Finish Project by JH Pro Builders*</li>
								<li className="project-item1">A once-in-a-lifetime project deserves timeless construction.
								</li>
							</ul>
							<ul className="projects-images">
								<li className="project-img">
									<img src={Images.d1} className="d-img" alt=''/>
									<h5>Smantha Green</h5>
									<Link to='/projects'>See More <img src={Images.arrow} className="arrow" alt=''/></Link>
								</li>
								<li className="project-img">
									<img src={Images.d2} className="d-img" alt=''/>
									<h5>Stucco White</h5>
									<Link to='/projects'>See More <img src={Images.arrow} className="arrow" alt=''/></Link>
								</li>
								<li className="project-img">
									<img src={Images.d3} className="d-img" alt=''/>
									<h5>Office White</h5>
									<Link to='/projects'>See More <img src={Images.arrow}className="arrow" alt=''/></Link>
								</li>
								<li className="project-img">
									<img src={Images.d4} className="d-img" alt=''/>
									<h5>Minimal White</h5>
									<Link to='/projects'>See More <img src={Images.arrow} className="arrow" alt=''/></Link>
								</li>
								<li className="project-img">
									<img src={Images.d5} className="d-img" alt=''/>
									<h5>Vintage Brown</h5>
									<Link to='/projects'>See More <img src={Images.arrow} className="arrow" alt=''/></Link>
								</li>
								<li className="project-img">
									<img src={Images.d6} className="d-img" alt=''/>
									<h5>Blue Reflict</h5>
									<Link to='/projects'>See More <img src={Images.arrow} className="arrow" alt=''/></Link>
								</li>
								<li className="project-img">
									<img src={Images.d7} className="d-img" alt=''/>
									<h5>Stone Bar</h5>
									<Link to='/projects'>See More <img src={Images.arrow} className="arrow" alt=''/></Link>
								</li>
								<li className="project-img">
									<img src={Images.d8} className="d-img" alt=''/>
									<h5>Summer Beige</h5>
									<Link to='/projects'>See More <img src={Images.arrow} className="arrow" alt=''/></Link>
								</li>
							</ul>
						</li>
	
					</ul>

				</li>

				<li className="ul-items"><NavLink to='/about' onClick={toggleMenu}>About </NavLink></li>
		
				<li className="ul-items"><NavLink to='/inquiryform' onClick={toggleMenu}><TbBuildingWarehouse/> Inquiry</NavLink></li>

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