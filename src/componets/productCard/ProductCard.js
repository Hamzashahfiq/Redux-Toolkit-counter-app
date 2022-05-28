import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'

export default function ProductCard({loading}) {
    const product = useSelector((store) => store.product.productData)
    console.log(product)
if(loading){
    return <div>Loading....</div>
}

    return (
        <>
       
       
            {
                product.map ((item, index) => {
                  
                    return (
                        <Card key ={index} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt="Product Iamge"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })

            }
           
        </>
    )
}
