import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home/Home.jsx'
import Services from './pages/AboutUs/Services.jsx'
import About from './pages/About/About.jsx'
import Project from './pages/Project/Project.jsx'
import Testimonial from './pages/Testimonial/Testimonial.jsx'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout  />}>
      <Route index element={<Home />} />
      <Route path="Services" element={<Services />} />
      <Route path="About" element={<About />} />
      <Route path="Projects" element={<Project />} />
      <Route path="Testimonial" element={<Project />} />

  
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App