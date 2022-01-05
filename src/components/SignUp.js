import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './style.css'
import { withRouter } from 'react-router-dom'

function SignUp(props) {

    let initialValues = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        confirmPassword:'',
        remember: false
    }

    let validationSchema = yup.object().shape({
        firstName:yup.string().required("Firstname is required"),
        lastName:yup.string().required("Lastname is required"),
        userName: yup.string().email("enter valid email").required("email is required"),
        password: yup.string().required("password is required").min("5").max("10"),
         confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    })

    let onSubmit = (values, props) => {
        console.log(values);
        props.resetForm()
    }
    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
       }
    return (
        <div className='container border mt-5'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                {(props) => (
                    <Form>
                        <div className='container'>
                        <div className="mb-3">
                                <label>FirstName</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter FirstName"
                                    name="firstName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="firstName" /></p>
                            </div>

                            <div className="mb-3">
                                <label>Lastname</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Lastname"
                                    name="lastName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="lastName" /></p>
                            </div>

                            <div className="mb-3">
                                <label>Email</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    name="userName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="userName" /></p>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <Field

                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="password"
                                />
                                <p className='error'><ErrorMessage name="password" /></p>

                            </div>
                     <div className="mb-3">
                                <label>Confirm Password</label>
                                <Field

                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Confirm Password"
                                    name="confirmPassword"
                                />
                                <p className='error'><ErrorMessage name="confirmPassword" /></p>

                            </div>
                     <div>
                                <Field
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    name="remember"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" >SignUp</button>

                            <h4 style={{ cursor: 'pointer' }}  onClick={navigateToLogin}>Already have an Account?Login Here!</h4>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default withRouter(SignUp)
