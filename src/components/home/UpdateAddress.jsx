import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateAddress({ open, handleClose, data, onChange, handleFormSubmit }) {

    const { fullName, address, city, state, zipcode, phoneNumber} = data

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ADDRESS BOOK || EDIT RECORD</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fullName"
                        label="Full Name"
                        type="text"
                        fullWidth
                        name="fullName"
                        variant="outlined"
                        value={fullName}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        name="address"
                        variant="outlined"
                        value={address}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label="City"
                        type="text"
                        fullWidth
                        name="city"
                        variant="outlined"
                        value={city}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="state"
                        label="State"
                        type="text"
                        fullWidth
                        name="state"
                        variant="outlined"
                        value={state}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="zipcode"
                        label="Zip Code"
                        type="text"
                        fullWidth
                        name="zipcode"
                        variant="outlined"
                        value={zipcode}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phoneNumber"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={e => onChange(e)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="error">Close</Button>
                    <Button onClick={() => handleFormSubmit()} variant="contained" color="success">Submit</Button>
                </DialogActions>
            </Dialog>
            <ToastContainer />
        </div>
    );
}
