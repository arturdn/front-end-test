const host = "https://front-test-api.herokuapp.com";

export const getProductFromApi = async (id) => {
  const response = await fetch(`${host}/api/product/${id}`);
  return response.json();
};

const getProductFromDbOrApi = async (db, id) => {
  if (!db) {
    return undefined;
  }
  db.version(1).stores({ product: "id,value" });
  db.open();

  const dbProduct = await db.product.get(id);
  const todayDate = new Date().getTime();

  if (!dbProduct) {
    const productApi = await getProductFromApi(id);

    db.product.add({
      id,
      createdTime: todayDate,
      product: productApi,
    });

    db.close();
    return productApi;
  }

  if (todayDate - dbProduct.createdTime >= 3600000) {
    const productApi = await getProductFromApi(id);
    db.product.update(id, {
      id,
      createdTime: todayDate,
      product: productApi,
    });

    db.close();
    return productApi;
  }

  db.close();
  return dbProduct.product;
};

export default getProductFromDbOrApi;
