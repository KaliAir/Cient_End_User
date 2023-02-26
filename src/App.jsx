import React,{lazy, Suspense} from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet} from 'react-router-dom'
import Header from './components/Header'
import LoadingSpinner from './components/Spinner'
import Footer from './components/Footer'
import {ImageProvider} from './Context/ImagesContext'

const Home = lazy(()=> import('./pages/Home'))
const Designs = lazy(()=> import('./pages/Designs'))
const Projects = lazy(()=> import('./pages/Projects'))
const Tables = lazy(()=> import('./subOutlet/Tables'))
const Chairs = lazy(()=> import('./subOutlet/Chairs'))
const Roof = lazy(()=> import('./subOutlet/Roof'))
const Cladding = lazy(()=> import('./subOutlet/Cladding'))
const RoofDesign = lazy(()=> import('./subOutlet/RoofDesign'))
const WallDesign = lazy(()=> import('./subOutlet/WallDesign'))
const CeilingDesign = lazy(()=> import('./subOutlet/CeilingDesign'))
const LandscapeDesign = lazy(()=> import('./subOutlet/LandscapeDesign'))



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
          <Route index element={<Suspense fallback={<LoadingSpinner/>}><Home/></Suspense>}/>
          <Route path='designs'element={<Suspense fallback={<LoadingSpinner/>}><Designs/></Suspense>}/>
          <Route path='tables' element={<Suspense fallback={<LoadingSpinner/>}><Tables/></Suspense>}/>
          <Route path='chairs' element={<Suspense fallback={<LoadingSpinner/>}><Chairs/></Suspense>}/>
          <Route path='roof' element={<Suspense fallback={<LoadingSpinner/>}><Roof/></Suspense>}/>
          <Route path='roofdesign' element={<Suspense fallback={<LoadingSpinner/>}><RoofDesign/></Suspense>}/>
          <Route path='walldesign' element={<Suspense fallback={<LoadingSpinner/>}><WallDesign/></Suspense>}/>
          <Route path='ceilingdesign' element={<Suspense fallback={<LoadingSpinner/>}><CeilingDesign/></Suspense>}/>
          <Route path='landscapedesign' element={<Suspense fallback={<LoadingSpinner/>}><LandscapeDesign/></Suspense>}/>
          <Route path='cladding' element={<Suspense fallback={<LoadingSpinner/>}><Cladding/></Suspense>}/>
          <Route path='projects'element={<Suspense fallback={<LoadingSpinner/>}><Projects/></Suspense>}/>
      </Route>
      )
    )
  return (
    <ImageProvider>
    <RouterProvider router={router}/>
    </ImageProvider>
  );
};

const Root = ()=>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>      
   
    )
}

export default App;