import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addData, updateData, updateDataFields } from '../../store/dashboard/dashboardSlice'
import { addError } from '../../store/errors/errorSlice'

const InputData = () => {
    const dispatch = useDispatch()
    const { updateDataValues } = useSelector((state => state.dashboard))
    const [input, setInput] = useState({ id: undefined, title: '', body: '' })
    useEffect(() => {
        if (updateDataValues) {
            setInput(updateDataValues)
        }
    }, [updateDataValues])


    function handleChange(e, key) {
        setInput({
            ...input,
            [key]: e.target.value,
        })
    }



    async function handleSubmit(e) {
        e.preventDefault()

        // validation
        let title = input.title.trim()
        let body = input.body.trim()
        if (!title || !body) {
            dispatch(addError({
                id: Math.random(),
                message: "Please enter the data in fiels"
            }))
            return
        }

        if (updateDataValues) {
            try {
                //for update functionality
                await axios.patch(`https://jsonplaceholder.typicode.com/posts/${input.id}`, input)
                dispatch(updateData(input))
                setInput({ id: undefined, title: '', body: '' })
                dispatch(updateDataFields(null))

            } catch (error) {
                console.log(error)
                dispatch(addError({
                    id: Math.random(),
                    message: "Unable to Update the Post, please try again"
                }))
            }
            return

        }
        // add the data
        try {
            await axios.post(`https://jsonplaceholder.typicode.com/posts/`, input)
            const ID = Math.round(100 + Math.random() * 10)
            dispatch(addData({ ...input, id: ID }))
            console.log(input)
            //clear the fields after operating
            setInput({ id: undefined, title: '', body: '' })
        } catch (error) {
            console.log(error)
            dispatch(addError({
                id: Math.random(),
                message: "Unable to add the Post, please try again"
            }))
        }

    }
    return (
        <Form className='d-flex flex-column gap-3 mb-4' onSubmit={handleSubmit}>
            <Form.Control type='text' placeholder='Add title'
                value={input.title}
                onChange={(e) => handleChange(e, 'title')} />
            <Form.Control as="textarea"
                type='text' placeholder='Add Description'
                value={input.body}
                onChange={(e) => handleChange(e, 'body')} />
            <Button variant='outline-primary' type='submit'  >
                {updateDataValues ? 'Save Changes' : 'Add'}
            </Button>
        </Form>
    )
}

export default InputData