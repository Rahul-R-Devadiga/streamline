import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import MainContainer from "./Components/MainContainer";
import WatchVideo from "./Components/WatchPage";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Demo from "./Components/Demo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
