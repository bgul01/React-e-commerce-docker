
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitFormData } from '../RegisterData'
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../dizayn/RegisterForm';
const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation logic
        const errors = {};
        // Validate required fields
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });
        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        setFormErrors(errors);

        // If there are no errors, you can proceed with form submission
        if (Object.keys(errors).length === 0) {
            // Do something with the form data (e.g., send to a server)
            console.log('Form submitted:', formData);
            dispatch(submitFormData(formData));
            setFormData(initialState)
            navigate('/login')
        }
    };






    return (

        <RegisterForm formData={formData} formErrors={formErrors} handleChange={handleChange} handleSubmit={handleSubmit} />

    )
}

export default Register