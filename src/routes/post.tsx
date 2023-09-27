import { PostProduct } from "../Components/ProdutcsFunction.tsx";
import { useState } from "react";
import { Product } from "../Components/Product.tsx";
import { redirect } from "react-router-dom";

export default function Post() {
  const checkIfPostExistWithName = async () => {
    const UserName = localStorage.getItem("name");
    console.log(UserName);
    const response = await fetch(
      `http://localhost:3003/products/getproducts/name/:${UserName}`
    ).then((response) => response.json());
    // Si la réponse contient `message: "Product found"`, alors on redirige vers la page d'accueil
    if (response.message === "Product found") {
      window.location.href = "/"; // Redirection vers la page d'accueil
    }
    console.log(response);
  };

  checkIfPostExistWithName();

  return (
    <>
      <main className="p-64">
        <PostProduct />
      </main>
    </>
  );
}
