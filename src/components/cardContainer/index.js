import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import SearchBox from '../searchBox/index.js';

import Divider from '@mui/material/Divider';


const CardContainer = ({children}) => (
    <Box m={2} sx={{ maxWidth: 600 }}>
        <Card  >
            <CardContent>
                <SearchBox />
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