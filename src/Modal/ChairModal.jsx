
import Modal from 'react-bootstrap/Modal';
import {useImages} from '../Context/ImagesContext'

function ChairModal(props) {

  const {chair,chairName} = useImages()

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
      <Modal.Body>
        <img src={require(`../images/chairs/${chair}.jpg`)} alt=""/>
      </Modal.Body>
      <Modal.Footer>
        <span>{chairName}</span>
      </Modal.Footer>
    </Modal>
  );
}

export default ChairModal