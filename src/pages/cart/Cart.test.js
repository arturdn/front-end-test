import { prettyDOM, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";
import Dexie from "dexie";

const testProducts = [
  {
    brand: "Acer",
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
    model: "Iconia Talk S",
    price: "170",
  },
  {
    brand: "Samsung",
    id: "y0gsWxpC3VOMjM-QOtYAy",
    imgUrl: "https://front-test-api.herokuapp.com/images/y0gsWxpC3VOMjM-QOtYAy",
    model: "M900",
    price: "250",
  },
  {
    brand: "Iphone",
    id: "pMZMhe_ZaAPZoaCCtlDrg",
    imgUrl: "https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg",
    model: "Liquid Jade 2",
    price: "",
  },
];

test("should render without any product", async () => {
  render(<Cart />);
  const resultado = await screen.findByText("No Products Available");
});

/* test("should render all products from server", () => {
  //obtener todos los Items renderizados en cart
  render(<Cart db={new Dexie("Cart")} />);
}); */
