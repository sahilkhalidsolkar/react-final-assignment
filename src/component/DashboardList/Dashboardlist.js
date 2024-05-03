import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../../store/dashboard/dashboardSlice'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import InputData from './InputData'
import ListData from './ListData'
import Loading from '../Loading'
import { addError } from '../../store/errors/errorSlice'

const Dashboardlist = () => {
    const { data } = useSelector((state => state.dashboard))
    const dispatch = useDispatch()
    useEffect(() => {
        async function loadInitialData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = response.data
                dispatch(loadData(data))
            } catch (error) {
                console.log(error)
                dispatch(addError({
                    id: Math.random(),
                    message: "Unable to fetch the posts"
                }))
            }
        }
        loadInitialData()

    }, [])

    return (
        <Row className='justify-content-center pt-4'>
            <Col md={8}>
                <InputData />
                {data.length <= 0 ? <Loading /> : <ListData />}
            </Col>
        </Row>
    )
}

export default Dashboardlist