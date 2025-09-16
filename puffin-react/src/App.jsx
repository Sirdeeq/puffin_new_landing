import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout and Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import PuffinAgro from './pages/PuffinAgro';
import Buildwise from './pages/Buildwise';
import PuffinEnergy from './pages/PuffinEnergy';
import LaserShield from './pages/LaserShield';
import MazLogistics from './pages/MazLogistics';
import Swingtide from './pages/Swingtide';

// Global Styles
import '/assets/css/bootstrap.css';
import '/assets/css/style.css';
import '/assets/css/meanmenu.min.css';
import '/assets/css/responsive.css';
import '/assets/css/color-switcher-design.css';
import '/assets/css/color-themes/default-color.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'testimonial', element: <Testimonial /> },
      { path: 'contact', element: <Contact /> },
      { path: 'puffin-agro', element: <PuffinAgro /> },
      { path: 'buildwise', element: <Buildwise /> },
      { path: 'puffin-energy', element: <PuffinEnergy /> },
      { path: 'laser-shield', element: <LaserShield /> },
      { path: 'maz-logistics', element: <MazLogistics /> },
      { path: 'swingtide', element: <Swingtide /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;