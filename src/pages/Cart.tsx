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
      <Typography variant="h4" textAlign={"center"}>
        Cart Items
      </Typography>
      {carts.length === 0 ? (
        <Box textAlign={"center"}>
          <Typography textAlign={"center"}>
            You Havnt added any products to the cart
          </Typography>
          <Button variant="contained" href="/" sx={{ alignContent: "center" }}>
            Go back to shopping
          </Button>
        </Box>
      ) : (
        <Box textAlign={"center"} >
          {carts?.map((item: productsCardInterface) => {
            return (
              <Paper
                key={item.id}
                
                sx={{
                  width: "60%",
                  marginTop:"20px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Box height={"15em"}>
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
              </Paper>
            );
          })}
          <Button variant="contained" color="error" onClick={()=> dispatch(clearCart(carts))}>Clear Cart</Button>
        </Box>
      )}
    </>
  );
};

export default Cart;
