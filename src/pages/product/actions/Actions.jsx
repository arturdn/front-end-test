import { useState } from "react";
import "./Actions.css";

import addToCart from "../../../services/addToCartServices";
import Select from "./Select";
import { useDispatch } from "react-redux";
import { increment } from "../../../redux/features/cartCounter/cartCounterSlice";

const Actions = ({ productId, colors, internalMemory }) => {
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedMemory, setSelectedMemory] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = async (e) => {
    e.preventDefault();

    const response = await addToCart({
      id: productId,
      colorCode: selectedColor.toString(),
      storageCode: selectedMemory.toString(),
    });
    dispatch(increment(response));
  };

  return (
    <div>
      {internalMemory && (
        <Select
          id="memory"
          label="Internal storage"
          options={internalMemory}
          onChange={(e) => setSelectedMemory(e.target.selectedIndex + 1000)}
        />
      )}
      {colors && (
        <Select
          id="color"
          label="Color"
          options={colors}
          onChange={(e) => setSelectedColor(e.target.selectedIndex + 1000)}
        />
      )}
      <button className="addButton" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Actions;
