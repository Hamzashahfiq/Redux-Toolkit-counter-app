import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './HeadernavBar.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';




export default function HeadernavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className='appBarMain' >
                <Toolbar>
                    <Typography variant="h6" component="div" className='typodiv' sx={{ flexGrow: 1, fontSize: 25 }} >
                        E-Store
                    </Typography>
                    <div className= 'AddCard'>
                        <IconButton className='cardButton' color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                        <Typography className='cardText' variant="caption" component="span">
                            0
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
