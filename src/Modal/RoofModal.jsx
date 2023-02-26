
import Modal from 'react-bootstrap/Modal';
import {useImages} from '../Context/ImagesContext'

function RoofModal(props) {

  const {roof} = useImages()

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
      <Modal.Body>
        <img src={require(`../images/roof/${roof}.jpg`)} alt=""/>
      </Modal.Body>
    </Modal>
  );
}

export default RoofModal