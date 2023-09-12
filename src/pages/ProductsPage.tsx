import  { useEffect, useState } from "react";
import { productsData } from "../services/axios.service";
import {
  
  ImageList
 
} from "@mui/material";
import { productsCardInterface } from "../interface/global.interfce";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/CartSlice";
import Card from "../components/Card";


const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  // const dispatch = useDispatch();
  

  // const addCart=(product: productsCardInterface) => {
  //   dispatch(addToCart(product))
  // }

  const getProductsData = async () => {
    const response = await productsData();
    // console.log(response.data);
    setProducts(response.data);
  };
  useEffect(() => {
  //  dispatch( getData());
  getProductsData();
  }, []);

  return (
    <>
      <ImageList sx={{ display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
        {products &&
          products.map((product: productsCardInterface, id : number) => {
            return (
        <Card key={id} product= {product}/>
            );
          })}
      </ImageList>

     
    </>
  );
};

export default ProductsPage;
