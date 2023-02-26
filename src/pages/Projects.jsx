import React from 'react'
import Images from '../images/index'
import {Link} from 'react-router-dom'

const Projects = ()=>{
	return (

	<div className="main-project-container">

		<div className="left-margin"></div>

		<div className="second-project-container">
			<div className="header-title">
				<h5>Interior Design</h5>
				<p>Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep.</p>
			</div>
			<div className="side-images">
				<div className="side-img-container">
					<span className="s-img-link"><img src={Images.d1} alt=""/></span>
					<span className="s-img-link"><img src={Images.d2} alt=""/></span>
					<span className="s-img-link"><img src={Images.d3} alt=""/></span>
					<span className="s-img-link"><img src={Images.d4} alt=""/></span>
					<span  className="s-img-link"><img src={Images.d5} alt=""/></span>
					<span  className="s-img-link"><img src={Images.d6} alt=""/></span>
					<span  className="s-img-link"><img src={Images.d7} alt=""/></span>
					<span  className="s-img-link"><img src={Images.d8} alt=""/></span>
				</div>
			</div>
			<div className="categories">
				<div className="categories-list">
					<h4> Categories</h4>
					<Link to='/projects' className='projects'>Interior Design</Link>
					<Link to='/roofdesign'>Roof Design</Link>
					<Link to='/walldesign'>Exterior Wall Design</Link>
					<Link to='/ceilingdesign'>Outside Ceiling Design</Link>
					<Link to='/landscapedesign'>LandScape Design</Link>
				</div>
			</div>
		</div>

		<div className="right-margin"></div>
	
	</div>
		)
}

export default Projects