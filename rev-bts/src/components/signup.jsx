/*
 * Author: Stephen Aranda
 * File  : signup.jsx
 * Desc  : Single file component for the signup page
 */

import React from "react";
import NavBar from "./navbar";
import '../styles/signup.css';

const Signup = () => {




    return (

        <div>
            <NavBar />
            <div className='signup-box'>
                <div className='signup-form-container'>
                    <form className='signup-form' >
                        <h2>Signup</h2>
                        <br />

                        <div className='input-group'>
                            <div className="label-group">
                                <label className='label-input-group' htmlFor='first_name'>
                                    First Name:</label>
                                <label className='label-input-group' htmlFor='last_name'>
                                    Last Name:</label>
                                <label className='label-input-group' htmlFor='phone_num'>
                                    Phone Number:</label>
                                <label className='label-input-group' htmlFor='cell_num'>
                                    Cell Number:</label>
                                <label className='label-input-group' htmlFor='email'>
                                    Email:</label>
                                <label className='label-input-group' htmlFor='city'>
                                    City:</label>
                                <label className='label-input-group' htmlFor='state'>
                                    State: </label>
                                <label className='label-input-group' htmlFor='street_addr'>
                                    Street Addr: </label>
                                <label className='label-input-group' htmlFor='zip_code'>
                                    Zip Code:</label>
                                <label className="label-input-group" htmlFor="password">
                                    Password:</label>
                            </div>
                            <div className="txt-box-group">
                                <input className='first-name-box'
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    placeholder='first name'
                                    required


                                />


                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='last-name-box'
                                    id='last_name'
                                    type='text'
                                    name='last_name'
                                    placeholder='last name'

                                />



                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='phone-num-box'
                                    id='phone_num'
                                    type='text'
                                    name='phone_num'
                                    placeholder='phone number'

                                />


                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='cell-num-box'
                                    id='cell_num'
                                    type='text'
                                    name='cell_num'
                                    placeholder='cell number'

                                />


                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='email-box'
                                    id='email'
                                    type='text'
                                    name='email'
                                    placeholder='email'

                                />



                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='city-box'
                                    id='city'
                                    type='text'
                                    name='city'
                                    placeholder='city'

                                />


                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='state-box'
                                    id='state'
                                    type='text'
                                    name='state'
                                    placeholder='state'

                                />


                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='street-addr-box'
                                    id='street_addr'
                                    type='text'
                                    name='street_addr'
                                    placeholder='Street Address'

                                />


                                <div className='errors'>
                                    <p></p>
                                </div>


                                <input className='zip-code-box'
                                    id='zip_code'
                                    type='text'
                                    name='zip_code'
                                    placeholder='zip code'

                                />


                                <div className='errors'>
                                    <p></p>
                                </div>

                                <input className="password-code-box"
                                    id='password'
                                    type="password"
                                    name="password"
                                    placeholder="Password" />

                                <div className="errors">
                                    <p></p>
                                </div>




                            </div>



                        </div>

                        <label className='label-input-group' htmlFor='user_type'>
                            Client
                            <input className='form-check-input'
                                id='Client'
                                type='radio'
                                name='user_type'
                                value='Client'

                            />
                        </label>

                        <label className='label-input-group' htmlFor='user_type'>
                            Trader
                            <input className='form-check-input'
                                id='Trader'
                                type='radio'
                                name='user_type'
                                value='Trader'

                            />
                        </label>

                        <div className='errors'>
                            <p></p>
                        </div>
                        <br></br>
                        <button
                            type='submit'
                            className='signup-submit'


                        >
                            Register
                        </button>

                    </form>
                    <div className="signup-img-container"></div>

                </div>

            </div>
        </div>
    )


}

export default Signup;