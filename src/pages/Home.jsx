import React from 'react'
import Images from '../images/index'
import {Link} from 'react-router-dom'

const Home = ()=>{

    const  scrollH =(e)=>{
      //Prevent scroll default
      e.preventDefault();
      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.querySelector('#imageSlide').scrollLeft -= (delta * 150);
    }
    // if(document.querySelector('#imageSlide').addEventListener){
    //   document.querySelector('#imageSlide').addEventListener('mousewheel', scrollH, false);
    //   document.querySelector('#imageSlide').addEventListener('DOMMouseScroll', scrollH, false);
    // }
    const handleMouseDown = ()=>{
    	document.querySelector('#imageSlide').addEventListener('mousewheel', scrollH);
    	document.querySelector('#imageSlide').addEventListener('DOMMouseScroll', scrollH);
    }


	return (
		<div className="home-container ">

		<div className="home-item1 home-inline" id="imageSlide" onMouseOverCapture={handleMouseDown}>
			<div className="item1"><img src={Images.img1} alt=""/></div>
			<div className="item1"><img src={Images.img2} alt=""/></div>
			<div className="item1"><img src={Images.img3} alt=""/></div>
			<div className="item1"><img src={Images.img4} alt=""/></div>
			<div className="item1"><img src={Images.img5} alt=""/></div>
			<div className="item1"><img src={Images.img6} alt=""/></div>
			<div className="item1"><img src={Images.img7} alt=""/></div>
			<div className="item1"><img src={Images.img8} alt=""/></div>
			<div className="item1"><img src={Images.img9} alt=""/></div>
			<div className="item1"><img src={Images.img10} alt=""/></div>
			<div className="item1"><img src={Images.img11} alt=""/></div>
			<div className="item1"><img src={Images.img12} alt=""/></div>
			<div className="item1"><img src={Images.img13} alt=""/></div>
		</div>


		<div className="home-item2">
			<div className="home-float">
				<div className="item-float1">
					<div className="content1"><img src={Images.gableroof} alt=""/></div>
					<div className="content1">
						<p>Roof Design</p>
					</div>
					<div className="content1">
						<p>Tile Roof with Gable Design, Specialize by Everglory Roof</p>
					</div>
					<div className="content1"><Link to='#'>Read More &#10146;</Link></div>
				</div>
				<div className="item-float2">
					<div className="content2"><img src={Images.pvc} alt=""/></div>
					<div className="content2">
						<p>Ceiling Design</p>
					</div>
					<div className="content2">
						<p>PVC ceiling Design, Interior and Exterior with Quality materials specialize by WorldWide</p>
					</div>
					<div className="content2"><Link to='#'>Read More &#10146;</Link></div>
				</div>
				<div className="item-float3">
					<div className="content3"><img src={Images.cladding} alt=""/></div>
					<div className="content3">
						<p>Cladding</p>
					</div>
					<div className="content3">
						<p>High quality cladding's, good for interior and exterior wall's</p>
					</div>
					<div className="content3"><Link to='#'>Read More &#10146;</Link></div>
				</div>
				<div className="item-float4">
					<div className="content4"><img src={Images.furnitures} alt=""/></div>
					<div className="content4">
						<p>Furnitures</p>
					</div>
					<div className="content4">
						<p>Let's start counting sheeps, Exquisite design combined with functionalities,</p>
					</div>
					<div className="content4"><Link to='#'>Read More &#10146;</Link></div>
				</div>
			</div>
		</div>
	
		<div className="home-item3">
			<p>RENOWNED SPECIALISTS IN INTERIOR DESIGN!</p>
		</div>
	</div>

		)
}

export default Home