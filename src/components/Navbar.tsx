import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  Stack,
  IconButton} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { productsCardInterface } from "../interface/global.interfce";

const Navbar = () => {
  const { carts } = useSelector((state: productsCardInterface) => state.carts)
  const navigate = useNavigate()
  const goTocart = () => {
    navigate('/cart')
  }
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            <Typography variant="h4">SHOPPING STORE</Typography>
          </Toolbar>
          <Stack direction={"row"} spacing={10} marginY={"auto"}>
            <Link underline="hover" color={"black"} fontSize={"19px"}>
              Categories
            </Link>
            <Link underline="hover" color={"black"} fontSize={"19px"} href='/products'>
              Products
            </Link>
            <Link underline="hover" color={"black"} fontSize={"19px"}>
             
              Stores
            </Link>
          </Stack>
          <Toolbar>
            <IconButton onClick={goTocart}>
            <LocalMallOutlinedIcon sx={{ ":hover": 
            {scale: "1.2",
            transition: ".5s"
            }, color:"black" }} 
            />
            {carts.length=== 0 ? (null) : (
              <Typography variant="subtitle2" >{carts.length}</Typography>
            )}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
