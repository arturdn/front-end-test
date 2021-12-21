import { useState } from 'react';
import "./Actions.css";

import addToCart from '../../../services/addToCartServices';
import Select from './Select';

const Actions = ({ productId, colors, internalMemory }) => {
    const [selectedColor, setSelectedColor] = useState(1);
    const [selectedMemory, setSelectedMemory] = useState(1);

    const onSubmit = async (e) => {
        e.preventDefault();

        const response = await addToCart({
            id: productId,
            colorCode: selectedColor.toString(),
            storageCode: selectedMemory.toString(),
        });

        window.dispatchEvent(new CustomEvent('addToBag', { detail: response }));
    };

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                {internalMemory && (
                    <Select
                        id="memory"
                        label="Internal storage"
                        options={internalMemory}
                        onChange={(e) => setSelectedMemory(e.target.selectedIndex + 1)}
                    />
                )}
                {colors && (
                    <Select
                        id="color"
                        label="Color"
                        options={colors}
                        onChange={(e) => setSelectedColor(e.target.selectedIndex + 1)}
                    />
                )}
                <button className="addButton" type="submit">
                    Add to cart
                </button>
            </form>
        </div>
    );
}

export default Actions;