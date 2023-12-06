import React from 'react'

const RegisterForm = ({ handleSubmit, handleChange, formErrors, formData }) => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <div className="box">
                                <h1 className="title">Register</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label className="label">First Name</label>
                                        <div className="control">
                                            <input
                                                className={`input ${formErrors.firstName && 'is-danger'}`}
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                autoComplete="new-username"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {formErrors.firstName && (
                                            <p className="help is-danger">{formErrors.firstName}</p>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label className="label">Last Name</label>
                                        <div className="control">
                                            <input
                                                className={`input ${formErrors.lastName && 'is-danger'}`}
                                                type="text"
                                                name="lastName"
                                                autoComplete="new-lastName"
                                                value={formData.lastName}

                                                onChange={handleChange}
                                            />
                                        </div>
                                        {formErrors.lastName && (
                                            <p className="help is-danger">{formErrors.lastName}</p>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input
                                                className={`input ${formErrors.email && 'is-danger'}`}
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                autoComplete="new-email"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {formErrors.email && (
                                            <p className="help is-danger">{formErrors.email}</p>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label className="label">Phone</label>
                                        <div className="control">
                                            <input
                                                className={`input ${formErrors.phone && 'is-danger'}`}
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                autoComplete="new-phone"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {formErrors.phone && (
                                            <p className="help is-danger">{formErrors.phone}</p>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control">
                                            <input
                                                className={`input ${formErrors.password && 'is-danger'}`}
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                autoComplete="new-password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {formErrors.password && (
                                            <p className="help is-danger">{formErrors.password}</p>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label className="label">Confirm Password</label>
                                        <div className="control">
                                            <input
                                                className={`input ${formErrors.confirmPassword && 'is-danger'}`}
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                autoComplete="new-password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {formErrors.confirmPassword && (
                                            <p className="help is-danger">{formErrors.confirmPassword}</p>
                                        )}
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-primary" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm