import React, { useEffect, useState } from "react";
import { productsData } from "../services/axios.service";
import {
  
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton
} from "@mui/material";
import { productsCardInterface } from "../interface/global.interfce";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";


const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  

  const addCart=(product: productsCardInterface) => {
    dispatch(addToCart(product))
  }

  const getProductsData = async () => {
    const response = await productsData();
    console.log(response.data);
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
          products.map((product: productsCardInterface) => {
            return (
              <ImageListItem key={product.id}  sx={{width:"15em", marginTop:"2em"}}>
                <img
                  src={product.image}
                    
                    height={"18em"}
                  
                  alt={product.title}
                  loading="eager"
                />
                <ImageListItemBar
                  title={product.title}
                  sx={{ textAlign: "center", color: 'rgba(255, 255, 255, 0.54)' }}
                  actionIcon={<IconButton sx={{color:"white"}} onClick={()=> addCart(product)}>
                    <AddShoppingCartIcon />
                  </IconButton>}

                />
                    
                
              </ImageListItem>
            );
          })}
      </ImageList>

     
    </>
  );
};

export default ProductsPage;
