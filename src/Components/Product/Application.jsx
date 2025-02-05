import { Products } from "../../Data/Products";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
const Application = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <div className="bg-white shadow-sm  border border-gray-200  rounded-sm p-6 w-full">
      <h3 className="text-xl font-semibold  text-gray-700 mb-4">
        Applications
      </h3>
      <div className="border-t border-gray-200 pt-4">
        <ul className="space-y-3">
          {selectedProduct.application.map((app, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-gray-700"
            >
              <span className="inline-block text-yellow-400 rounded-full">
                <PlayArrowRoundedIcon />
              </span>
              <span className="text-md font-normal">{app}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Application;
