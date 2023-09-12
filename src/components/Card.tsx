
import {
    ImageListItem,
    ImageListItemBar,
    IconButton
  } from "@mui/material";
import { productsCardInterface } from '../interface/global.interfce';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Card = ({product}: productsCardInterface) => {
    const dispatch = useDispatch()

    const addCart = (product: productsCardInterface) => {
        dispatch(addToCart(product))
    }
  return (
    <>
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
    </>
  )
}

export default Card