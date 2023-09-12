import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataFetch } from '../redux/DataSlice'
import { productsCardInterface } from '../interface/global.interfce';
import { Box, Typography} from '@mui/material';
import { addToCart } from '../redux/CartSlice';
import Card from '../components/Card';

const Data = () => {
    const dispatch = useDispatch();
    const {product }= useSelector((state : productsCardInterface) => state.product)
    // console.log("products are",product)

    useEffect(() => {
        dispatch(dataFetch())
       
    },[])
    
      
    

  return (
    <>
    <Box>
       <Typography textAlign={'center'} variant='h3'>Products</Typography>
       { product.loading && <Box>Loading...</Box>}
       { !product.loading && product.error ? (<Box>
        Error : {product.error}
       </Box>) : (null)}

       {/* {
        product.fulfilled && 
          product.map((prod : productsCardInterface) => {
            return(
              <Card key={prod.id}>
              <Box >
                <Typography color={'black'}>{prod.title}</Typography>
                <img src={prod.image} alt={prod.title} />
              </Box>
              </Card>
            )
          })
        
       } */}
       <Box sx={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
       {
        
          
       
        
        product?.map((prod : productsCardInterface, id : number) => {
          return (
            <Card key={id} product={prod}/>
          )
        }
        )
        
       }
        </Box>
       
        
    </Box>
    </>
  )
}

export default Data