import Layout from "./components/layout"
import { BrowserRouter } from "react-router-dom"
import MusicPlayerProvider from "./context/MusicPlayerProvider"
import Router from "./components/router"

function App(){
  return(
    <BrowserRouter>
      <MusicPlayerProvider>
        <div className="relative px-9 lg:px-[0px] w-full lg:w-[82%] lg:mx-auto">
              <Layout>
                <Router/>
              </Layout>
        
         </div>
         </MusicPlayerProvider>
    
    </BrowserRouter>

  )
}

export default App 
