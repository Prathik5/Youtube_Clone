import logo from "./logo.svg";
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Children } from "react";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchVideoContainer from "./Components/SearchVideoContainer";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer className="col-span-11 " />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchVideoContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={approuter} />
        {/* Head
          Body
            -SideBar
              --Home
              --Subscription
              --Explore
            -videoContainer
              -VideoCard
          Footer
       */}
      </div>
    </Provider>
  );
}

export default App;
