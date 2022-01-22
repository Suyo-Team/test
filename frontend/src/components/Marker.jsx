function Marker(props) {
  return (
    <>
      <div className='ui' data-tooltip={props.owner}>
        <i className='big violet map marker icon'></i>
      </div>
    </>
  );
}
export default Marker;
