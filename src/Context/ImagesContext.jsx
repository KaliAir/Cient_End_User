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

	const handleShow = (img)=>{
		setImages(img)
		setModalShow(true)
	}

	const handleChairs = (img)=>{
		setChair(img)
		setModalShow(true)
	}

	const handleRoof = (img)=>{
		setRoof(img)
		setModalShow(true)
	}

	const handleCladding = (img)=>{
		setCladding(img)
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
}

return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}