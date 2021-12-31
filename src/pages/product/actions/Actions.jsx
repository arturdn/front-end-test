import { useState } from "react";
import "./Actions.css";

import addToCart from "../../../services/addToCartServices";
import { useDispatch } from "react-redux";
import { increment } from "../../../redux/features/cartCounter/cartCounterSlice";
import { Button, MenuItem, Select } from "@mui/material";

const Actions = (props) => {
  const { id, options, colors, internalMemory, price } = props.product;
  const [selectedColor, setSelectedColor] = useState(1000);
  const [selectedMemory, setSelectedMemory] = useState(2000);

  const dispatch = useDispatch();

  const handleAddToCart = async (e) => {
    e.preventDefault();

    const response = await addToCart({
      id: id,
      colorCode: selectedColor.toString(),
      storageCode: selectedMemory.toString(),
    });
    dispatch(increment(response));
  };

  return (
    <div className="actionsContainer">
      {internalMemory && (
        <Select
          id="internal-storage"
          labelId="internal-storage"
          value={selectedMemory}
          onChange={(e) => setSelectedMemory(e.target.value)}
          className="actionSelect"
          size="small"
        >
          {options.storages.map((option) => {
            return (
              <MenuItem key={option.code} value={option.code}>
                {option.name}
              </MenuItem>
            );
          })}
        </Select>
      )}
      {colors && (
        <Select
          id="color"
          labelId="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="actionSelect"
          size="small"
        >
          {options.colors.map((option) => {
            return (
              <MenuItem key={option.code} value={option.code}>
                {option.name}
              </MenuItem>
            );
          })}
        </Select>
      )}
      {price ? (
        <Button
          variant="contained"
          className="addButton"
          size="large"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      ) : (
        <Button variant="contained" className="addButton" size="large" disabled>
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default Actions;
