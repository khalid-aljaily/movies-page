import Catigories from './components/Catigories'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import Suggestions from './components/Suggestions'

function App() {
  return (
    <div className='flex text-white container gap-5'>
       <Catigories/>
      <div className='flex-[4]'>
      <Navbar/>
      <div className='flex flex-col md:flex-row gap-5'>
        <SearchForm/>
        <Suggestions/>
      </div>
      </div>
     
    </div>
  )
}

export default App
