import React from 'react'
import Images from '../images/index'
import {Link} from 'react-router-dom'

const Designs = ()=>{
	return (
		<>
			<div className="design-container">
				<div className="design-item1"></div>
				<div className="design-item2">
					<div className="collections">
						ALL COLLECTIONS
					</div>
				</div>
				<div className="design-item3"></div>
			</div>
			<div className="materials-container">
				<div className="marginL">

				</div>
		<div className="materials-display">
					<div className="display-m">
						<Link to='/tables'><img src={Images.table} alt=''/></Link>
						<div className="product-item">
							<h5>TABLES</h5>
							<p>11 items</p>
							<Link to='/tables'>Show all</Link>
						</div>
					</div>
					<div className="display-m">
						<Link to='/chairs'><img src={Images.chairs} alt=''/></Link>
						<div className="product-item">
							<h5>CHAIRS</h5>
							<p>9 items</p>
							<Link to='/chairs'>Show all</Link>
						</div>
					</div>
					<div className="display-m">
						<Link to='/roof'><img src={Images.roof} alt=''/></Link>
						<div className="product-item">
							<h5>ROOF</h5>
							<p>8 items</p>
							<Link to='/roof'>Show all</Link>
						</div>
					</div>
					<div className="display-m">
						<Link to='/cladding'><img src={Images.clad} alt=''/></Link>
						<div className="product-item">
							<h5>CLADDING</h5>
							<p>4 items</p>
							<Link to='/cladding'>Show all</Link>
						</div>
					</div>
			</div>
				<div className="marginR">

				</div>
		</div>
		</>
		)
}

export default Designs