import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
  return (
      <div className="Auth">
          <div className="a-left">
              <img src={Logo} alt="" />
              <div className="Webanme">
                  <h1>ZKC Media</h1>
                  <h6>Explore the ideas throughout the world</h6>
              </div>
          </div>
          <Login/>
    </div>
  )
}


function SignUp() {
    return (
        <div className="a-right">
            <form className='infoForm authForm'>


                <h3>Sign up</h3>

                <div>
                    <input type="text" placeholder='first name' className='infoInput' name="firstname" id="" />
                    <input type="text" placeholder='last name' className='infoInput' name="lastname" id="" />
                </div>

                
                <div>
                    <input type="text" className="infoInput" name='username' placeholder='user name' />
                </div>

                <div>
                    <input type="password" name='password' placeholder='password' className="infoInput" />
                    <input type="password" name='confirmpass' placeholder='confirm password' className="infoInput" />
                </div>

                <div>
                    <span style={{ fontSize: '12px' }} >Already have an account ?  Login !</span>
                </div>

                <button type='submit' className="button infoButton">Sign Up</button>


            </form>
        </div>
    )
}

function Login() {
    return (
        <div className="a-right">
            <form className='infoForm authForm'>


                <h3>Login</h3>

                
                <div>
                    <input type="text" className="infoInput" name='username' placeholder='user name' />
                </div>

                <div>
                    <input type="password" name='password' placeholder='password' className="infoInput" />
                </div>

                <div>
                    <span style={{ fontSize: '12px' }} >Dont  have an account ?  SignUp !</span>
                <button type='submit' className="button infoButton">Login</button>
                </div>



            </form>
        </div>
    )
}


export default Auth