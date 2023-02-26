import React from 'react'
import Images from '../images/index'
import ChairModal from '../Modal/ChairModal'
import {useImages} from '../Context/ImagesContext'




const Tables = (props)=>{

	const {handleChairs,modalShow,setModalShow} = useImages()

	
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
						CHAIR COLLECTIONS
					</div>
				</div>
				<div className="design-item3"></div>
			</div>

			<div className="table-collection">
				<span></span>
				<div className="table-container">
					<div className="table-items" onClick={()=>handleChairs('chair1')}>
						<img src={Images.chair1} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair2')}>
						<img src={Images.chair2} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair3')}>
						<img src={Images.chair3} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair4')}>
						<img src={Images.chair4} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair5')}>
						<img src={Images.chair5} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair6')}>
						<img src={Images.chair6} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair7')}>
						<img src={Images.chair7} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair8')}>
						<img src={Images.chair8} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleChairs('chair9')}>
						<img src={Images.chair9} alt=""/>
					</div>
					
				</div>
				<span></span>
		    </div>

		    <ChairModal
		        show={modalShow}
		        onHide={() => setModalShow(false)}
		      />
		    
		</>
		)
}

export default Tables