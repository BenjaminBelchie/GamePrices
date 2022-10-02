import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Divider, Stack, Chip, Popover, IconButton } from "@mui/material";
import { useState } from "react";
import { Game } from "../../types/Game";
import './index.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type Props = {
    open: boolean, 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    game:Game
}

const GameInfoDialog: React.FC<Props> = (props) => {
    const [infoAnchorEl, setInfoAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleOpenInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInfoAnchorEl(event.currentTarget);
    };

    const handleInfoClose = () => {
        setInfoAnchorEl(null);
    };

    const infoOpen = Boolean(infoAnchorEl);
    const id = infoOpen ? 'simple-popover' : undefined;
    
      const handleClose = () => {
        props.setOpen(false);
      };

      const calculatePercentage = (msrp: number, salePrice: number) => {
        const result = 100 * (msrp - salePrice) / msrp
        return Math.round(result);
      }

      const numZeroesAfterPoint = (x:any) => {
        if (x % 1 == 0) {
          return 0;
        } else {
          return -1 - Math.floor(Math.log10(x % 1));
        }
      }

      const returnChipColor = () => {
        const dealRating = parseFloat(props.game.dealRating);
        if(dealRating >= 0 && dealRating <= 5){
            // Error
            return "#d32f2f";
        } else if(dealRating > 5 && dealRating <= 7){
            // Warning
            return "#f57c00";
        } else if(dealRating >7 &&dealRating <= 10){
            // Success
            return "#388e3c";
        } else{
            // Error
            return "#d32f2f";
        }
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
                        <img src={props.game.thumb} className="dialogImage"/>
                        <Divider orientation="vertical"  sx={{marginLeft:2, marginRight:2}} flexItem />
                        <Stack direction="column" spacing={2}>
                            <div>
                                <div className="ratingTextContainer">
                                     <p className="body">Deal Rating:</p>
                                     <IconButton onClick={handleOpenInfo} className="infoButton">
                                        <InfoOutlinedIcon sx={{fontSize:"16px"}}/>
                                     </IconButton>
                                </div>
                              
                                <div style={{marginTop:1, width:"fit-content", color:"white", padding:"8px", backgroundColor:`${returnChipColor()}`}}>{numZeroesAfterPoint(props.game.dealRating) === 0 ? parseInt(props.game.dealRating) : props.game.dealRating}</div> 
                            </div>
                            <Popover 
                                open={infoOpen}
                                anchorEl={infoAnchorEl}
                                onClose={handleInfoClose}
                                anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                >
                                    <div style={{padding:"1em"}}>
                                        Deals are rated out of 10
                                    </div>
                                
                            </Popover>
                            <Divider sx={{marginTop:1, marginBottom:1}}/>
                            <Stack direction="row" alignItems="center">
                                <div className="percent-container">
                                    <p className="discountText">-{calculatePercentage(parseInt(props.game.normalPrice), parseInt(props.game.salePrice))}%</p>
                                </div>
                                <div className="prices-container">
                                    <p className="msrp-price">${props.game.normalPrice}</p>
                                    <p className="sale-price">${props.game.salePrice}</p>
                                </div>
                            </Stack>
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