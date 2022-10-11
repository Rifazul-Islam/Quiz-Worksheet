
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';


import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Rechart from './components/Rechart/Rechart';

function App() {
  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>, errorElement: <ErrorPage />, children: [

        {
          path: '/', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Home></Home>
        },

        {
          path: '/home', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Home></Home>
        },

        {
          path: '/quiz/:id', loader: async ({ params }) => {

            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }, element: <QuizDetails></QuizDetails>

        },


        {
          path: '/rechart', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Rechart></Rechart>
        },
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
