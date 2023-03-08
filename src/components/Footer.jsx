import React from 'react'
import Images from '../images/index'
import {ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'
import {ImInstagram} from 'react-icons/im'
import {GrMapLocation} from 'react-icons/gr'
import {GiTreasureMap} from 'react-icons/gi'
import {FcPhoneAndroid} from 'react-icons/fc'
import {HiOutlinePhone} from 'react-icons/hi'


const Footer = ()=>{
	
	
	return (

		<>
		<div className="home-item4" id="home4">
			<div className="item4-container">
				<div className="contact-item">
					<div className="contact1">
						<span><img src={Images.phone} alt=''/></span>
						<p>CALL TODAY</p>
						<p>+639266366905</p>
					</div>
				</div>
				<div className="contact-item">
					<div className="contact1">
						<span><img src={Images.tele} alt=''/></span>
						<p>FAX US</p>
						<p>02-8123-4567</p>
					</div>
				</div>
				<div className="contact-item">
					<div className="contact1">
						<span><img src={Images.invelope} alt=''/></span>
						<p>EMAIL US</p>
						<p className="niko">nikomagloslos@gmail.com</p>
					</div>
				</div>
			</div>
		</div>

		<div className="home-item5">
			<div className="item5-container" data-tooltip= "Go back &#8608;">
				<div className="item5">
					<h2>Contact Us</h2>
					<p>6038 Cebu, Toledo city/matab-ang</p>
					<p><FcPhoneAndroid/> 09266366905</p>
					<p><HiOutlinePhone/> 02-6666-9999</p>
				</div>
				<div className="item5">
					<h2>Information</h2>
					<GiTreasureMap className='treasure'/>
					<a href="https://www.google.com/maps/@10.364158,123.6169869,3a,75y,327.62h,80.8t/data=!3m6!1e1!3m4!1s8Sl6yvKypVZRHHLAZeSuow!2e0!7i16384!8i8192" target="_blank" rel="noopener noreferrer"><GrMapLocation/>  Office Location</a>
				</div>
				<div className="item5">
					<h2>Social Page Links</h2>
					<a href="https://web.facebook.com/profile.php?id=100087252951498" rel="noreferrer" target="_blank"><ImFacebook2/>  Facebook</a>
					<a href='https://twitter.com'><FaTwitterSquare/>  Twitter</a>
					<a href='https://www.instagram.com'><ImInstagram/>  Instagram</a>
				</div>
			</div>
		</div>
			<div className="scrollup">
				<a href="#nav">&#10163;</a>
	        </div>
		
		</>

		)
}

export default Footer