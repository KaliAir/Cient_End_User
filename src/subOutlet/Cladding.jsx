import React from 'react'
import Images from '../images/index'
import CladdingModal from '../Modal/CladdingModal'
import {useImages} from '../Context/ImagesContext'




const Tables = (props)=>{

	const {handleCladding,modalShow,setModalShow} = useImages()

	
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
						CLADDING COLLECTIONS
					</div>
				</div>
				<div className="design-item3"></div>
			</div>

			<div className="table-collection">
				<span></span>
				<div className="table-container">
					<div className="table-items" onClick={()=>handleCladding('cladding1')}>
						<img src={Images.cladding1} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleCladding('cladding2')}>
						<img src={Images.cladding2} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleCladding('cladding4')}>
						<img src={Images.cladding4} alt=""/>
					</div>

					<div className="table-items" onClick={()=>handleCladding('cladding5')}>
						<img src={Images.cladding5} alt=""/>
					</div>
					
				</div>
				<span></span>
		    </div>

		    <CladdingModal
		        show={modalShow}
		        onHide={() => setModalShow(false)}
		      />
		    
		</>
		)
}

export default Tables