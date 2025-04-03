import loading from '../assets/mimikyu-loading.gif'

const Loader = () => {
  return (
  <div className="loading">
    <img 
      className='loading-image'
      src={loading}
      alt="Mimikyu loading"
    />
  </div>)
}

export default Loader