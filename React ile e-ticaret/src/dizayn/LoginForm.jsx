import React from 'react'
import { Link } from 'react-router-dom';

const LoginForm = ({ handleLogin, handleChange, sigIn }) => {
  return (
    <section className="hero is-fullwidth ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="box">
                <h1 className="title">Login</h1>
                <form onSubmit={handleLogin}>
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input value={sigIn.email} name='email' onChange={handleChange} autoComplete="new-email" className="input" type="text" placeholder="Your username" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input name='password' autoComplete="new-password" onChange={handleChange} className="input" type="password" placeholder="Your password" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <button onSubmit={handleLogin} className="button is-primary" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </form>

                <p className="has-text-centered">
                  Kayıtlı değilseniz,
                  <Link to="/Register">Kayıt Olun</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm