import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IAsteroidDetails } from '../HomePage'

interface IAsteroidDialog {
	open: boolean
	handleClose: React.Dispatch<React.SetStateAction<boolean>>
	dialogData: IAsteroidDetails | null
}

const AsteroidDialog = ({
		open,
		handleClose,
		dialogData }: IAsteroidDialog) => {
	
	return (
		<Dialog
	        open={open}
	        onClose={() => handleClose(false)}
      	>
        <DialogTitle>
          Asteroid Details
        </DialogTitle>
        <DialogContent>
          <div>Name : <span>{dialogData?.name}</span></div>
          <div>Nasa JPL URL : <span>{dialogData?.nasaJplUrl}</span></div>
          <div>Potentially Hazardous: <span>{dialogData?.isPotentiallyHazardous ? 'Yes' : 'No'}</span></div>
        </DialogContent>
        <DialogActions>
	        <Button onClick={() => handleClose(false)}>
	          	Close
	        </Button>
        </DialogActions>
      </Dialog>
	)
}

export default AsteroidDialog