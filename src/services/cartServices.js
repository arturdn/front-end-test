const host = 'https://front-test-api.herokuapp.com';

const getProductsFromApi = async () => {
    const response = await fetch(`${host}/api/product`);
    const mobiles = await response.json();
    return mobiles;
};

const getProductsFromDbFirstOrApi = async (db) => {
    db.version(1).stores({ products: 'id,value' });
    db.open();

    const dbProducts = await db.products.get('products');
    const todayDate = new Date().getTime();

    if (!dbProducts) {
        const apiProducts = await getProductsFromApi();

        db.products.add({
            id: 'products',
            createdTime: todayDate,
            products: apiProducts,
        });

        db.close();
        return apiProducts;
    }

    if (todayDate - dbProducts.createdTime >= 3600000) {
        const apiProducts = await getProductsFromApi();
        db.products.update('products', {
            id: 'products',
            createdTime: todayDate,
            products: apiProducts,
        });

        db.close();
        return apiProducts;
    }

    db.close();
    return dbProducts.products;
};

export default getProductsFromDbFirstOrApi;