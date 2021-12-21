import "./Searcher.css";

import SearchIcon from "../../../../layout/icons/SearchIcon";

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
        <label className="searcherLabel" htmlFor="searcher">
            <SearchIcon />
            <input
                className="searcherInput"
                id="searcher"
                type="text"
                placeholder="Search..."
                onChange={(e) => filterBySearch(e.target.value.toLowerCase())}
            />
        </label>
    );
};

export default Searcher;
