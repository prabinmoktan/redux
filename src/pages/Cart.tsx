import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Paper, Typography } from "@mui/material";
import { productsCardInterface } from "../interface/global.interfce";
import { removeFromCart, clearCart } from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((item: any) => item.carts);
  // console.log(carts)

  

  return (
    <>
      <Box>
        <Typography variant="h4" textAlign={"center"}>
          Cart Items
        </Typography>
        {carts.length === 0 ? (
          <Box textAlign={"center"}>
            <Typography textAlign={"center"}>
              You Havnt added any products to the cart
            </Typography>
            <Button
              variant="contained"
              href="/"
              sx={{ alignContent: "center" }}
            >
              Go back to shopping
            </Button>
          </Box>
        ) : (
          carts?.map((item: productsCardInterface) => {
            return (
              <Paper
                key={item.id}
                sx={{
                  width: "60%",
                  height: "20em",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Box height={"18em"}>
                  <img src={item.image} alt={item.title} height={"100%"} />
                </Box>
                <Box>
                  <Typography marginY={"auto"} padding={"2em"}>
                    {item.title}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                    }}
                  >
                   
                    remove from cart
                  </Button>
                </Box>
                <Button onClick={()=> dispatch(clearCart(carts))}>clear cart</Button>
              </Paper>
            );
          })
          
          
        )}
        
      </Box>
    </>
  );
};

export default Cart;
