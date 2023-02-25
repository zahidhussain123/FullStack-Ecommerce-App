import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./pages/category/Categories";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import './app.scss'

const Layout = () => (
  <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Categories />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
