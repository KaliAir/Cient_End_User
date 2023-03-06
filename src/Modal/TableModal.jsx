
import Modal from 'react-bootstrap/Modal';
import {useImages} from '../Context/ImagesContext'

function TableModal(props) {

  const {images,tableName} = useImages()

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
      <Modal.Body>
        <img src={require(`../images/tables/${images}.jpg`)} alt=""/>
      </Modal.Body>
      <Modal.Footer>
        <span>{tableName}</span>
      </Modal.Footer>
    </Modal>
  );
}

export default TableModal