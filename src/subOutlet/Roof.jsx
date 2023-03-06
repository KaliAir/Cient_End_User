import React from 'react'
import Images from '../images/index'
import RoofModal from '../Modal/RoofModal'
import {useImages} from '../Context/ImagesContext'




const Tables = (props)=>{

	const {handleRoof,modalShow,setModalShow} = useImages()

	
	// const [image, setImage]=useState('')


    // const handleShow = (img) =>{
    // 	setModalShow(true)
    // 	setImage(img)
    // }

	return (
			<>
			<div className="design-container">
				<div className="design-item1"></div>
				<div className="design-item2">
					<div className="collections">
						ROOF COLLECTIONS
					</div>
				</div>
				<div className="design-item3"></div>
			</div>

			<div className="table-collection">
				<span></span>
				<div className="table-container">
					<div className="table-items" onClick={()=>handleRoof('roof1','High Rib')}>
						<img src={Images.roof1} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleRoof('roof2','Rib Type')}>
						<img src={Images.roof2} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleRoof('roof3','Mini Rib')}>
						<img src={Images.roof3} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleRoof('roof4','Tile Roof')}>
						<img src={Images.roof4} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleRoof('roof5','Milazzo Tile Type')}>
						<img src={Images.roof5} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleRoof('roof6','Mega Rib')}>
						<img src={Images.roof6} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleRoof('roof7','Asphalt Shingles')}>
						<img src={Images.roof7} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleRoof('roof8','Congcrete Roof Tegula')}>
						<img src={Images.roof8} alt=""/>
					</div>
					
				</div>
				<span></span>
		    </div>

		    <RoofModal
		        show={modalShow}
		        onHide={() => setModalShow(false)}
		      />
		    
		</>
		)
}

export default Tables