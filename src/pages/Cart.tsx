// import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Paper, Typography, Grid, Stack } from "@mui/material";
import { productsCardInterface } from "../interface/global.interfce";
import { removeFromCart, clearCart } from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((item: any) => item.carts);
  console.log(carts);

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
        <Grid container  sx={{textAlign:"center", margin:"auto"}}>
          { carts?.map((item : productsCardInterface) => {
            return(
              <Grid container key={item.id}>
                <Grid item md={8} xs={12} sm={6} marginTop={"20px"}>
                  <Paper elevation={18}>
                    <Stack direction={"row"} justifyContent={"space-around"} spacing={24}>
                      <img src={item.image} alt={item.title} height={"150em"} width={"130em"}/>
                      <Box>
                      <Typography>{item.title}</Typography>
                      <Typography >Price: ${item.price}</Typography>
                      <Button variant="contained" color="error" onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</Button>
                      </Box>
                    </Stack>

                  </Paper>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>1</Grid>
              </Grid>
              
            )
          })}
          <Box margin={'auto'} >
          <Button variant="contained" color="error" sx={{marginTop:"20px"}} onClick={()=> dispatch(clearCart())}>Clear Cart</Button>
          </Box>
          
        </Grid>   

                    


        
      )}
    </>
  );
};

export default Cart;
