import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Divider, Stack, Chip } from "@mui/material";
import { useState } from "react";
import { Game } from "../../types/Game";
import './index.css';

type Props = {
    open: boolean, 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    game:Game
}

const GameInfoDialog: React.FC<Props> = (props) => {
    
      const handleClose = () => {
        props.setOpen(false);
      };

      const calculatePercentage = (msrp: number, salePrice: number) => {
        const result = 100 * (msrp - salePrice) / msrp
        return Math.round(result);
      }

    return(
        <div>
            <Dialog open={props.open} onClose={handleClose} PaperProps={{ 
                style:{
                    maxWidth:"1280px"
                }
            }}>
                <DialogTitle>{props.game.title}</DialogTitle>
                <DialogContent>
                    <Stack direction="row">
                        <img src={props.game.thumb} style={{height:"auto", width:"200px"}} />
                        <Divider orientation="vertical"  sx={{marginLeft:2, marginRight:2}} flexItem />
                        <Stack direction="column" spacing={2}>
                            <div>
                               <p className="body">Deal Rating:</p>
                                <Chip sx={{marginTop:1}} label={props.game.dealRating}/> 
                            </div>
                            <Stack direction="row" alignItems="center">
                                <div className="percent-container">
                                    <p className="discountText">-{calculatePercentage(parseInt(props.game.normalPrice), parseInt(props.game.salePrice))}%</p>
                                </div>
                                <div className="prices-container">
                                    <p className="msrp-price">{props.game.normalPrice}</p>
                                    <p className="sale-price">{props.game.salePrice}</p>
                                </div>
                            </Stack>

                            
                            
                            {/* Steam Discount Component */}
                            {/*<div className="priceContainer">
                               <div className="discount-container">
                                <p className="discount">-{calculatePercentage(parseInt(props.game.normalPrice), parseInt(props.game.salePrice))}%</p>
                               </div>
                               <div className="price-container">
                                <p className="oldPrice">{props.game.normalPrice}</p>
                                <p className="newPrice">{props.game.salePrice}</p>
                               </div> 
                             </div> */}
                            <div>
                               <a className="buyNowBtn" href={`https://www.cheapshark.com/redirect?dealID=${props.game.dealID}`} target="_blank">Buy Now</a>
                            </div>
                            
                        </Stack>
                    </Stack>
                    
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default GameInfoDialog;