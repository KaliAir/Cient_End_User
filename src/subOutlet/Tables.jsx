import React from 'react'
import Images from '../images/index'
import MyVerticallyCenteredModal from '../Modal/TableModal'
import {useImages} from '../Context/ImagesContext'




const Tables = (props)=>{

	const {handleShow,modalShow,setModalShow} = useImages()

	
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
						TABLE COLLECTIONS
					</div>
				</div>
				<div className="design-item3"></div>
			</div>

			<div className="table-collection">
				<span></span>
				<div className="table-container">
					<div className="table-items" onClick={()=>handleShow('table1')}>
						<img src={Images.table1} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table2')}>
						<img src={Images.table2} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table3')}>
						<img src={Images.table3} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table4')}>
						<img src={Images.table4} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table5')}>
						<img src={Images.table5} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table6')}>
						<img src={Images.table6} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table7')}>
						<img src={Images.table7} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table8')}>
						<img src={Images.table8} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table9')}>
						<img src={Images.table9} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table10')}>
						<img src={Images.table10} alt=""/>
					</div>
					<div className="table-items" onClick={()=>handleShow('table11')}>
						<img src={Images.table11} alt=""/>
					</div>
				</div>
				<span></span>
		    </div>

		    <MyVerticallyCenteredModal
		        show={modalShow}
		        onHide={() => setModalShow(false)}
		      />
		    
		</>
		)
}

export default Tables