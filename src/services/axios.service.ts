import axios from 'axios'

// export const productsData = async() => {
//     try{
//         const response = await axios.get(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list`,{
//             params: {
//                 country: 'us',
//                 lang: 'en',
//                 currentpage: '0',
//                 pagesize: '30',
//                 categories: 'men_all',
//                 concepts: 'H&M MAN'
//               },
//         headers: {
//             'X-RapidAPI-Key': 'b2710875c4mshb82070d67e01a54p1ed253jsnf08aa93bf047',
//     'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
//           }
//     }
    
//     )
//     // console.log(response.data.data)
//     return(response.data.results)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }
export const productsData =async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return(response)
}





