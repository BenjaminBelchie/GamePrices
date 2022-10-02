import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GameCard from '../../components/GameCard';
import { List8Deals } from '../../util/endpoints';
import './index.css'



const Homepage: React.FC = () => {
    const [games, setGames] = useState<any[]>([]);

    useEffect(() => {
        axios.get(List8Deals)
            .then((res) => {
                console.log(res);
                setGames(res.data);
            })
    }, [])
    
    return(
        <>
        <div className="games-wrapper">
            <Grid container spacing={2} columns={{ xs: 1, md: 12 }}>
                {games.length >0 ? games.map((game, index) =>(
                    <Grid item xs={1} md={3} key={index}>
                        <GameCard game={game} />
                    </Grid>
                ))
                :
                <CircularProgress />}
            </Grid>
        </div>
        
            
        </>
    )
}

export default Homepage;