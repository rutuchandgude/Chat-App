
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//Dynamic Bunding
//lazy loading
//on demand loading
//dynamic import

const Grocery = lazy(()=> import("./components/Grocery"));

function AppLayout() {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
}

const appRouter = createBrowserRouter([
    {
         path:"/",
         element : <AppLayout/>,
         children : [
        {
            path:"/",
            element : <Body/>,
        },
        {
            path:"/about",
            element : <About />,
        },
        {
            path:"/contact",
            element : <Contact />,
        },
        {
            path:"/grocery",
            element :(
            <Suspense fallback={<h1>Loading...</h1>}>
                 <Grocery /> 
            </Suspense> 
            ),
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu />,
        }
    ],
    errorElement : <Error/>,
},
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);