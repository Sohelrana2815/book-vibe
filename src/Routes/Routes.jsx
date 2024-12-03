import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);

export default router;
