import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Stores } from '../../util/endpoints';
import './index.css';

const imagePrefix  = "https://www.cheapshark.com/";

const Platform: React.FC = () => {
    const [stores, setStores] = useState<any[]>([])
    useEffect(() => {
        axios.get(Stores).then((response) => {setStores(response.data); console.log(response)});
    },[])
    
    return(
        <div className="platform-page">
            
            <Grid container spacing={2} columns={{ xs: 1, md: 12 }}>
                {stores.length >0 ? stores.map((store, index) =>(
                    <Grid item xs={1} md={2} key={index}>
                        <div style={{
                            minWidth:"50px",
                            minHeight:"100px",
                            borderRadius:"12px",
                            backgroundPosition: "center center", 
                            backgroundSize:"cover",
                            backgroundRepeat: "no-repeat", 
                            backgroundImage:`url(https://www.cheapshark.com/${store.images.logo}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2))`, 
                            backgroundBlendMode:"overlay"}}></div>
                    </Grid>
                ))
                :
                <CircularProgress />}
            </Grid>
           
        </div>
    )
}

export default Platform;