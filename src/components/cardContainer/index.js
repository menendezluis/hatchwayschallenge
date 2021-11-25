import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

const CardContainer = ({children}) => (
    <Box m={2} sx={{ maxWidth: 600 }}>
        <Card  >
            <CardContent>
                <input type="text"
                    placeholder="Search"
                    style={{
                        width: '100%',
                        
                        padding: '0.5rem',
                    
                        fontSize: '1rem',
                        outline: 0,
                        borderWidth: "0 0 2px",
                        borderColor: '#ccc',
                       
                        boxShadow: 'none',
                        transition: 'all 0.25s ease 0s',
                        outline: 'none',
                    }}  
                />
                <>
                <Divider  />
                <div style={{ overflow: 'hidden'}}>
                <div style={{maxHeight:500,  overflow: 'auto'}}>
                    {children}</div>
               </div>
                </>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>
);

export default CardContainer;