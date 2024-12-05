import { useLoaderData } from "react-router-dom";

const PagesToRead = () => {
  const books = useLoaderData();

  console.log(books);
  
  return (
    <div>
      
    </div>
  );
};

export default PagesToRead;