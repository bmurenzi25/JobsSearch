import './App.css'
import Button from './components/reusable/Button';
import InputText from './components/reusable/InputText';
import Navbar from './components/ui/Navbar';
import bg from './images/backgrounds/banner-2.jpg'
function App() {
  return (
    <>
      <div className="hero">
        <Navbar />
        {/* <img src={bg} alt='bg' className='bg' /> */}
        <div className='content-hero'>
          <h1>Find your job</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <div className='input-block'>
            <InputText placeholder='Job title, Keywords or company name' />
            <InputText placeholder='Location' />
            <Button>
              <span>()</span>
              <span> Search</span>
            </Button>
          </div>
          <div className='stats'>
            <div className='stat-box'>
              <span className='count'>2967</span>
              <span>Jobs Posted</span>
            </div>
            <div className='stat-box'>
              <span className='count'>167</span>
              <span>Companies</span>
            </div>
            <div className='stat-box'>
              <span className='count'>150</span>
              <apn>Candidates</apn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
