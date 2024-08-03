import Layout from "./components/layout"
import { BrowserRouter } from "react-router-dom"
import Router from "./components/router"

function App(){
  return(
    <BrowserRouter>
      <div className="relative w-[82%]  mx-auto">
            <Layout>
              <Router/>
            </Layout>
      
      </div>
    </BrowserRouter>

  )
}

export default App 
