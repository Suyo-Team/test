import { Link } from "react-router-dom";
function Menu(props) {
  return (
    <>
      <div className='ui container'>
        <div className='ui secondary  menu'>
          <a className='active item'>Suyo</a>

          {/* <Link to='/predios' className='active item'>
          Predios
        </Link> */}
          <div className='right menu'>
            <div className='item'>
              <div className='ui icon input '>
                <input
                  onChange={(e) => {
                    props.handleSearch(e);
                  }}
                  type='text'
                  placeholder='Propietario'></input>
                <i className='search link icon'></i>
              </div>
            </div>
            <div className='ui item'>
              {props.user ? (
                <button
                  className='ui red button '
                  onClick={() => {
                    props.logout();
                  }}>
                  Salir
                </button>
              ) : (
                <a className='ui item'></a>
              )}
            </div>
          </div>
          <div className='ui divider'></div>
        </div>
      </div>
    </>
  );
}

export default Menu;
