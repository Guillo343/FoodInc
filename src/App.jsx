import './App.css'
import { Navbar } from './components/navbar'
import { Searcher } from './components/searcher'
import { Info } from './components/info'
import { RecipeSearch } from './components/recipeSearch'
import { InputSearcher } from './components/InputSearcher'

function App() {

  return (
    <>
          <Searcher />
       <Info />
       <InputSearcher/>
    </>
  )
}

export default App
