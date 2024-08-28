import Layout from "./components/layout"
import { BrowserRouter } from "react-router-dom"
import Router from "./components/router"

function App(){
  return(
    <BrowserRouter>
      <div className="relative px-9 lg:px-[0px] w-full lg:w-[82%] lg:mx-auto">
            <Layout>
              <Router/>
            </Layout>
      
      </div>
    </BrowserRouter>

  )
}

export default App 
