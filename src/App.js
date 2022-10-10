
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Rechart from './components/Rechart/Rechart';

function App() {
  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>, errorElement: <ErrorPage />, children: [

        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/rechart', element: <Rechart></Rechart> },
        { path: '/blog', element: <Blog></Blog> }
      ]
    }

  ])
  return (
    <div className="App">


      <RouterProvider router={router} > </RouterProvider>

    </div>
  );
}

export default App;
