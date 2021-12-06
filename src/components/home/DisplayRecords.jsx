import React, { useState, useEffect } from 'react';
import './Home1.css';
import AddressBookService from '../../services/AddressBookService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateAddress from './UpdateAddress';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialValue = { fullName: "", address: "", city: "", state: "", zipcode: "", phoneNumber: "" }

function DisplayRecords() {

    const getAlleRecords = () => {
        AddressBookService.getAllAddresses().then(
            (response) => {
                // toast.dark("Records has been loaded", { position: "top-center" });
                setaddress(response.data.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong, while getting all the records", { position: "top-center" });
            }
        );
    };

    useEffect(() => {
        document.title = "All Records";
        getAlleRecords();
    }, []);

    const [address, setaddress] = useState([])


    const [open, setOpen] = React.useState(false)


    const [formData, setFormData] = useState(initialValue)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = (oldData) => {
        setFormData(oldData)
        handleClickOpen()
    }

    const onChange = (e) => {
        const { value, id } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleFormSubmit = () => {
        const confirm = window.confirm("Are you sure, you want to update this row ?")
        confirm && AddressBookService.updateAddress(formData, formData.personId).then(
            (response) => {
                toast.dark("Record Updated Successfully", { position: "top-center" });
                getAlleRecords();
                handleClose();
            },
            (error) => {
                toast.error("Something went wrong, while updating record ", { position: "top-center" });
            }
        );
    }

    const deleteaddress = (id) => {
        AddressBookService.deleteAddress(id).then(
            (response) => {
                toast.dark("Record Deleted Successfully", { position: "top-center" });
                updateAddressArrayAfterDelete(id);
            },
            (error) => {
                toast.error("Something went wrong, while deleting record ", { position: "top-center" });
            }
        );
    };

    const updateAddressArrayAfterDelete = (id) => {
        setaddress(address.filter((emp) => emp.personId !== id));
    };

    return (
        <>
            <table className="table-display">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                    {
                        address.length > 0 && address.map((person, index) => (
                            <tr key={`${index}`}>
                                <td>{person.personId}</td>
                                <td>{person.fullName}</td>
                                <td>{person.address}</td>
                                <td>{person.city}</td>
                                <td>{person.state}</td>
                                <td>{person.zipcode}</td>
                                <td>{person.phoneNumber}</td>
                                <td>
                                    <Button onClick={() => handleUpdate(person)} startIcon={<EditIcon />} />
                                    <Button onClick={() => deleteaddress(person.personId)} startIcon={<DeleteIcon />} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <UpdateAddress open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
            <ToastContainer />
        </>
    )
}

export default DisplayRecords