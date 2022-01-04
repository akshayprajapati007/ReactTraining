import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { ICapitalWeatherDialog } from '../CountryDetails'

interface ICapitalWeatherDialog {
	open: boolean
	handleClose: React.Dispatch<React.SetStateAction<boolean>>
	dialogData: ICapitalWeatherDialog
}

const CapitalWeatherDialog = ({open, handleClose, dialogData}: ICapitalWeatherDialog) => {
	return (
		<Dialog 
			open={open}
			onClose={handleClose}
			maxWidth="sm"
			fullWidth
			>
		    <DialogTitle>Capital Weather</DialogTitle>
		        <DialogContent>
		          <div>
		            <div>{dialogData?.weatherIcons?.map(icon => {
		            	return (
		            		<img
		            			key={icon}
		            			src={icon}
		            			alt="weather_icon"
		            			height="50"
		            			width="50" />
		            	)
		            })}</div>
		          	<div>Temperature: {dialogData?.temperature} &#8451;</div>
		          	<div>Wind Speed: {dialogData?.windSpeed} KM/H</div>
		          	<div>Precip: {dialogData?.precip} MM</div>
		          </div>
		        </DialogContent>
		        <DialogActions>
		          <Button
		          	variant="contained"
		          	onClick={() => handleClose(false)}>
		          	Close
		          </Button>
		        </DialogActions>
      </Dialog>
	)
}

export default CapitalWeatherDialog