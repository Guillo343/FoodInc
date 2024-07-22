import './App.css'
import { Navbar } from './components/navbar'
import { Searcher } from './components/searcher'
import { Api } from './components/api'

function App() {

  return (
    <>
       <Navbar />
       <Searcher />
       <Api />
    </>
  )
}

export default App
