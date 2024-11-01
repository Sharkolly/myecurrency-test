import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './components/Home/HomePage'
import AboutPage from './components/Shop/AboutPage'
import FAQ from './components/FAQ/FAQ'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<AboutPage/>}/>
        <Route path='/shop' element={<AboutPage/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path="*" />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App;
