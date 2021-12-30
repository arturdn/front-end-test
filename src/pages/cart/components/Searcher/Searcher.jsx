import "./Searcher.css";
import { TextField } from "@mui/material";

const Searcher = ({ defaultProducts, onChange }) => {
  const filterBySearch = async (word) => {
    const filteredProducts = defaultProducts.filter(
      (product) =>
        product.brand.toLowerCase().includes(word) ||
        product.model.toLowerCase().includes(word)
    );

    if (filteredProducts.length !== 0) {
      onChange(filteredProducts);
    } else {
      onChange([]);
    }
  };

  return (
    <div className="searcherContainer">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        fullWidth
        onChange={(e) => filterBySearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Searcher;
