import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

// this property set the intialvalue for form field
const initialValues = {
    name: 'Ak',
    email: '',
    channel: ''
}

// when form submitted this property is called by the formik
const onSubmit = values => { // here we used 'values' is different form formik values
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Please enter a valid email format').required('Please enter your email'),
    channel: Yup.string().required('Please enter your channel')
})

function YoutubeForm() {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel'/>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm