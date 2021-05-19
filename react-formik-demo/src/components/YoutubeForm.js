import React from 'react'
import {useFormik} from 'formik'
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

//this propety is use for validation of our form field and it returs object
const validate = values => {
    let errors = {}
    if(!values.name){
        errors.name = 'Please enter your name'
    }

    if(!values.email){
        errors.email = 'Please enter your email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email format'
    }

    if(!values.channel){
        errors.channel = 'Please enter your channel'
    }

    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Please enter a valid email format').required('Please enter your email'),
    channel: Yup.string().required('Please enter your channel')
})

function YoutubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema //1) here instead of pass validate object we pass yup object for easy validation
       //2) validate
    })

    //console.log(formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' name='email' 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        value={formik.values.channel} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
