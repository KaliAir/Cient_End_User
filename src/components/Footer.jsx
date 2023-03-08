import React from 'react'
import Images from '../images/index'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'
import {ImInstagram} from 'react-icons/im'
import {GrMapLocation} from 'react-icons/gr'
import {GiTreasureMap} from 'react-icons/gi'


const Footer = ()=>{
	const API = 'http://localhost:8000/api'
	
	const[name,setName]=useState('')
	const[lastname,setLastName]=useState('')
	const[email,setEmail]=useState('')
	const[inquiry,setInquiry]=useState('')
	const[phonenumber, setPhoneNumber]=useState('')
	const navigate = useNavigate()

	const handleSubmit = (e)=>{
		e.preventDefault();
		 const inqData = {name,lastname,email,inquiry,phonenumber};
	

	fetch(`${API}/inquiry`,{
		method:"POST",
		headers:{
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(inqData)
	})
	.then((res)=>{
		alert('Inquiry Send Successfuly');
		setName('')
		setLastName('')
		setEmail('')
		setInquiry('')
		setPhoneNumber('')
		window.location.reload();
	})
	.catch((err)=>{
		console.log(err.message);
	})

	}

	
	return (

		<>
		<div className="home-item4" id="home4">
			<div className="item4-container">
				<div className="contact-item">
					<div className="contact1">
						<a href="#"><img src={Images.phone}/></a>
						<p>CALL TODAY</p>
						<p>+639266366905</p>
					</div>
				</div>
				<div className="contact-item">
					<div className="contact1">
						<a href="#"><img src={Images.tele}/></a>
						<p>FAX US</p>
						<p>02-8123-4567</p>
					</div>
				</div>
				<div className="contact-item">
					<div className="contact1">
						<a href="#"><img src={Images.invelope}/></a>
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
					<p><i className="fa-solid fa-phone"></i> 09266366905</p>
					<p><i className="fa-solid fa-envelope"></i> 02-6666-9999</p>
				</div>
				<div className="item5">
					<h2>Information</h2>
					<GiTreasureMap className='treasure'/>
					<a href="https://www.google.com/maps/@10.364158,123.6169869,3a,75y,327.62h,80.8t/data=!3m6!1e1!3m4!1s8Sl6yvKypVZRHHLAZeSuow!2e0!7i16384!8i8192" target="_blank" rel="noopener noreferrer"><GrMapLocation/>  Office Location</a>
				</div>
				<div className="item5">
					<h2>Social Page Links</h2>
					<a href="https://web.facebook.com/profile.php?id=100087252951498" target="_blank"><ImFacebook2/>  Facebook</a>
					<a href="#"><FaTwitterSquare/>  Twitter</a>
					<a href="#"><ImInstagram/>  Instagram</a>
				</div>
			</div>
		</div>
			<div className="scrollup">
		<a href="#nav">&#10163;</a>
	</div>
		<input type="checkbox" name="" id="modal"/>
		<div className="contact-container">
			<label htmlFor="modal" className="nav-contact-btn"><AiOutlineCloseCircle style={{fontSize:'2rem'}}/></label>
			<h5 className="contact-header">Get in touch with us</h5>

			<form method="POST" className="modal-form" onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="First Name" className="fn-input" value={name} onChange={(e)=> setName(e.target.value)}/>
				<input type="text" name="lastname" placeholder="Last Name" className="ln-input" value={lastname} onChange={(e)=> setLastName(e.target.value)}/>
				<input type="email" name="email" placeholder="Email" className="email-input" value={email} onChange={(e)=> setEmail(e.target.value)}/>
				<select className="select-concern" name="inquiry" value={inquiry} onChange={(e)=> setInquiry(e.target.value)}>
					<option >Interior Design</option>
					<option >Exterior Design</option>
					<option >Roofing</option>
					<option >Land Scaping</option>
					<option >Fencing</option>
					<option >Swimming Pools</option>
					<option >Smart Home</option>
					<option >Other</option>
				</select>
				<input type="text" name="phonenumber" placeholder="Phone Number" className="phone-number" value={phonenumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
				<button htmlFor='modal' type='submit' className="modal-btn">Submit</button>
			</form>

			<p>By clicking on <span className="privaciy-submit">Submit</span>,you acknowledge having read our <a href="#">Privacy notice</a></p>
		</div>
		</>

		)
}

export default Footer