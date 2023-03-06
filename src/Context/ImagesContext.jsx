import {useContext, createContext, useState} from 'react'

const ImageContext = createContext()

export const useImages = ()=>{
	return useContext(ImageContext)
}

export const ImageProvider = ({children})=>{
	const [images, setImages] = useState('table1')
	const [modalShow, setModalShow] = useState(false);
	const [chair, setChair] = useState('chair1')
	const [roof, setRoof] = useState('roof1')
	const [cladding, setCladding] = useState('cladding1')
	const [tableName, setTableName] = useState('Quasis four seater')
	const [chairName, setChairName] = useState('Back Rest')
	const [roofName,setRoofName] = useState('High Rib')
	const [claddingName, setCladdingName] = useState('WPC Cladding')

	const handleShow = (img,tbname)=>{
		setImages(img)
		setTableName(tbname)
		setModalShow(true)
	}

	const handleChairs = (img,chname)=>{
		setChair(img)
		setChairName(chname)
		setModalShow(true)
	}

	const handleRoof = (img,rfname)=>{
		setRoof(img)
		setRoofName(rfname)
		setModalShow(true)
	}

	const handleCladding = (img,clname)=>{
		setCladding(img)
		setCladdingName(clname)
		setModalShow(true)
	}


const value = {
 images,
 handleShow,
 modalShow,
 setModalShow,
 handleChairs,
 chair,
 roof,
 handleRoof,
 handleCladding,
 cladding,
 tableName,
 chairName,
 roofName,
 claddingName,
}

return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}