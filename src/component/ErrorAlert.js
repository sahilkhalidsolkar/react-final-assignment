import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { removeError } from '../store/errors/errorSlice';


const ErrorAlert = () => {
    const { error } = useSelector(state => state.errors)
    const dispatch = useDispatch()

    function handleClose(id) {
        dispatch(removeError(id))
    }
    return (
        <Container>
            <Row className='justify-content-center mt-4'>
                <Col md={8}>
                    {
                        error.map(item => (<Alert className='mt-1 ' key={item.id} variant="danger" onClose={() => handleClose(item.id)} dismissible>
                            {item.message}
                        </Alert>))
                    }
                </Col>
            </Row>



        </Container>
    )
}

export default ErrorAlert