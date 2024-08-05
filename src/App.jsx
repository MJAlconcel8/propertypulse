import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
      ]
    }
  ]);
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar/>
    //   </div>
    //   <div className="content">
    //     <HomePage/>
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App