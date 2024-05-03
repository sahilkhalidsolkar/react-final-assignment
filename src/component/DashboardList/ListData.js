import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import TablePagination from './TablePagination'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, updateDataFields } from '../../store/dashboard/dashboardSlice'
import { addError } from '../../store/errors/errorSlice'

const ListData = () => {
    const { data } = useSelector(state => state.dashboard)
    const dispatch = useDispatch()
    const [currData, setCurrData] = useState([])
    const [active, setActive] = useState(1)
    let no_of_items = data.length
    let no_of_items_per_pages = 7
    let pages = Math.ceil(no_of_items / no_of_items_per_pages)
    let first_idx = (active - 1) * no_of_items_per_pages
    let last_idx = first_idx + no_of_items_per_pages
    useEffect(() => {
        setCurrData(data.slice(first_idx, last_idx))
    }, [active, data])

    async function handleDelete(id) {
        // api request
        try {
            let response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log('delete', response)
            //UI updation

            dispatch(deleteData(id))

        } catch (error) {
            console.log(error)
            dispatch(addError({
                id: Math.random(),
                message: "Unable to delete the posts"
            }))

        }

    }
    function handleUpdate(data) {

        dispatch(updateDataFields(data))
    }
    return (
        <>
            <Table bordered hover >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td className=' '>
                                <div className='d-flex flex-sm-row justify-content-center align-items-center flex-column gap-3  h-100'>
                                    <Button
                                        onClick={() => handleUpdate(item)}
                                        variant='outline-secondary'>Update</Button>
                                    <Button
                                        onClick={() => handleDelete(item.id)}

                                        variant='outline-danger'>Delete</Button>
                                </div>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </Table>
            <div className='d-flex justify-content-center'>
                <TablePagination active={active} setActive={setActive} pages={pages} />
            </div>
        </>
    )
}

export default ListData
