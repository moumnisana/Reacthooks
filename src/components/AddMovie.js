import React ,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function AddMovie({add}) {
    const [show, setShow] = useState(false);
    const [addMovie, setaddMovie] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) =>{
        setaddMovie({...addMovie,[e.target.name]:e.target.value});
        
    }
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
        Add a movie to the list
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display:'flex', flexDirection:'column'}} >
          Title :<input name='title' onChange={handleChange}/>
          Description :<input name='description'onChange={handleChange} />
          PosterUrl :<input name='posterUrl'onChange={handleChange} />
          Rate :<input name='rate' onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit"onClick={()=>{add(addMovie);handleClose()}}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default AddMovie