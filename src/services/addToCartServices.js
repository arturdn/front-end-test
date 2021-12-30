const host = "https://front-test-api.herokuapp.com";

const addToCart = async (data) => {
  const response = await fetch(`${host}/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie:
        "s%3Ac9l2Gua7DToM6X3kWZ8F2eQVWdBB_Qtn.%2BTdUr%2FTKUmBMq17B2l1W1mYSgo7e2PvMRESLzUbGnIA",
    },
    body: JSON.stringify(data),
    credentials: "same-origin",
  });
  return response.json();
};

export default addToCart;
