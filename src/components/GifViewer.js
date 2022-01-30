
import bootstrap from "bootstrap";
import {Button} from "react-bootstrap"
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const GifViewer = ({ gifs, buttonAction, buttonText }) => (
    <div className='gifs-container'>
        {gifs.map((gif, key) => {
            return (
                     <div key={key} className='gif-container' >
                        <Card style={{ width: '24rem'}}>
                        <Card.Body >
                            <Card.Img variant="flat" src={gif.download_url}  style={{width: '350px', height:"350px"}}/> 
                            <Button variant="primary"  onClick={(gif) => buttonAction(key)} style={{backgroundColor: "grey"}}>{buttonText}</Button>
                        </Card.Body>
                        </Card>
                     </div>
            )
            })}
    </div>

);

export default GifViewer;
