
import Modal from 'react-bootstrap/Modal';
import {useImages} from '../Context/ImagesContext'

function CladdingModal(props) {

  const {cladding,claddingName} = useImages()

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
      <Modal.Body>
        <img src={require(`../images/cladding/${cladding}.jpg`)} alt=""/>
      </Modal.Body>
      <Modal.Footer>
        <span>{claddingName}</span>
      </Modal.Footer>
    </Modal>
  );
}

export default CladdingModal