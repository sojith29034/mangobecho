import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = () => {
    return(
        <Row className='d-flex align-items-center justify-content-around py-3 bg-warning bg-opacity-75'>
            <Col className='ms-5'>
                <h1>mangoBecho</h1>
            </Col>

            <Col>
                <Row>
                    <Col>Home</Col>
                    <Col>Cart</Col>
                    <Col>Profile</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Navbar;