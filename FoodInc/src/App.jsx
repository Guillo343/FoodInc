import './App.css'
import { Navbar } from './components/navbar'
import { Searcher } from './components/searcher'
import { Info } from './components/info'
import { RecipeSearch } from './components/recipeSearch'

function App() {

  return (
    <>
       {/* <Navbar /> */}
       <Searcher />
       <Info />
       <RecipeSearch />
    </>
  )
}

export default App
