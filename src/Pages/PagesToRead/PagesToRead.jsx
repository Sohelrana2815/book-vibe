import { useLoaderData } from "react-router-dom";
import useFilteredBooks from "../../Utility/useFilteredBooks";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

const PagesToRead = () => {
  const books = useLoaderData();

  // Get read book list from local storage
  const readBooks = useFilteredBooks(books, getStoredReadBooks);

  // Transform readBooks data
  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    totalPages: book.totalPages,
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${
      y + height / 3
    } ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    <>
      <div className="flex justify-center mt-9 p-4 bg-gray-50 rounded-xl">
        {" "}
        <BarChart
          width={1280}
          height={700}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {" "}
          <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="name" />{" "}
          <YAxis />{" "}
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {" "}
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}{" "}
          </Bar>{" "}
        </BarChart>{" "}
      </div>
      <div>
        <p className="text-center font-WorkSans font-medium text-lg">
          This chart display the total number of pages for each book in your
          read list.
        </p>
      </div>
    </>
  );
};

export default PagesToRead;
