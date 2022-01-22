function Login(props) {
  const { username, setusername, password, setpassword, HandleLogin } = props;
  return (
    <div className='ui grid container'>
      <div className=' column'>
        <div className='ui placeholder segment'>
          <div className='ui two column very relaxed stackable grid'>
            <div className='column'>
              <div className='ui form'>
                <div className='field'>
                  <label>Username</label>
                  <div className='ui left icon input'>
                    <input
                      type='text'
                      placeholder='Username'
                      value={username}
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}></input>
                    <i className='user icon'></i>
                  </div>
                </div>
                <div className='field'>
                  <label>Password</label>
                  <div className='ui left icon input'>
                    <input
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}></input>
                    <i className='lock icon'></i>
                  </div>
                </div>
                <div
                  className='ui blue submit button'
                  onClick={() => {
                    HandleLogin();
                  }}>
                  Login
                </div>
              </div>
            </div>
            <div className='middle aligned column'>
              <div className='ui cards'>
                <div class='card'>
                  <div class='content'>
                    <div class='header'>Usuario Demo</div>
                    <div class='meta'>Usuario</div>
                    <div class='description'>suyo@suyo.com</div>
                    <div class='meta'>Contraseña</div>
                    <div class='description'>suyo1234</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ui vertical divider'></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
