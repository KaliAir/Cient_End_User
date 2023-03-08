import React from 'react'
import '../inquiry.css'
import {MdDriveFileRenameOutline} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {GiSmartphone} from 'react-icons/gi'
import {SiAntdesign} from 'react-icons/si'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'



const Inquiry = ()=>{

	const navigate = useNavigate()

	const API = 'http://localhost:8000/api'
	
	const[name,setName]=useState('')
	const[lastname,setLastName]=useState('')
	const[email,setEmail]=useState('')
	const[inquiry,setInquiry]=useState('')
	const[phonenumber, setPhoneNumber]=useState('')
	

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
		navigate('/')
	})
	.catch((err)=>{
		console.log(err.message);
		alert('Inquiry Fail')
		window.location.reload();
	})

	}

	return (
		<>
			<div className='body'>		
				<div className="background"></div>
				<div className="container">
				    <h2>Get in touch with us</h2>
				    <form method='POST' onSubmit={handleSubmit}>

				      <div className="form-item">
				        <span className="material-icons-outlined span">
				           f<MdDriveFileRenameOutline/>
				        </span>
				        <input required type="text" name="name"  placeholder="First name" value={name} onChange={(e)=> setName(e.target.value)}/>
				      </div>

				      <div className="form-item">
				        <span className="material-icons-outlined span">
				           l<MdDriveFileRenameOutline/>
				        </span>
				        <input required type="text" name="lastname"  placeholder="Last name" value={lastname} onChange={(e)=> setLastName(e.target.value)}/>
				      </div>

				      <div className="form-item email-item">
				        <span className="material-icons-outlined span">
				           <AiOutlineMail/>
				        </span>
				        <input required type="email" name="email"  placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
				      </div>

				      <div className="form-item">
				        <span className="material-icons-outlined span">
				           <SiAntdesign/>
				        </span>
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
				      </div>

				      <div className="form-item">
				        <span className="material-icons-outlined span">
				          <GiSmartphone/>
				        </span>
				        <input required type="text" name="phonenumber"  placeholder="Phone Number" value={phonenumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
				      </div>

				      <button type="submit">Submit</button>

				    </form>
				</div>
			</div>	
		</>	
		)
}

export default Inquiry