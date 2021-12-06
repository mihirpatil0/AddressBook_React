import React, { useState } from 'react'
import './AddressBookForm.css';
import addressbook from "../../assets/icons/addressbook.jpeg";
import cancel from "../../assets/icons/cancel.jpeg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddressBookService from '../../services/AddressBookService';
import { Link } from 'react-router-dom';


function AddressBookForm() {

    const [address, setAddress] = useState({ fullName: "", address: "", city: "", state: "", zipcode: "", phoneNumber: "" });

    const handleInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setAddress({ ...address, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let addressObject = {
            fullName: address.fullName,
            address: address.address,
            city: address.city,
            state: address.state,
            zipcode: address.zipcode,
            phoneNumber: address.phoneNumber
        }
        postDataToServer(addressObject);

        setAddress({ fullName: "", address: "", city: "", state: "", zipcode: "", phoneNumber: "" });
    }

    const postDataToServer = (addressObject) => {
        AddressBookService.createAddress(addressObject).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.dark("New Record Added successfully.", { position: "top-center" });
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error occured while adding new record.", { position: "top-center" });
            }
        )
    }

    return (
        <div className="payroll-main">
            <header className="header-content header">
                <div className="logo-content">
                    <img src={addressbook} alt="addressbook" />
                    <div>
                        <span className="addressBook-text">ADDRESS</span><br />
                        <span className="addressBook-text addressBook-book">BOOK</span>
                    </div>
                </div>
            </header>
            <div className="form-content">
                <form className="form" action="#" onSubmit={handleSubmit}>
                    <div className="form-head">
                        <div className="form-head-text">Person Address Form</div>
                        <Link to="/" className="add-button">
                            <img className="form-head-image" src={cancel} alt="logo" />
                        </Link>
                    </div>
                    <div className="form-constrains">
                        <div className="row-content">
                            <label htmlFor="name" className="label text">Full Name :</label><br />
                            <div className="input-error">
                                <TextField className="input" type="text" id="fullName" name="fullName"
                                    variant="outlined"
                                    value={address.fullName}
                                    onChange={handleInputs}
                                    placeholder="" />
                            </div>
                            <error-output className="name-error"></error-output>
                        </div>
                        <div className="row-content">
                            <label htmlFor="phoneNumber" className="label text">Phone Number :</label>
                            <div className="input-error">
                                <TextField className="input" type="text" id="phoneNumber" name="phoneNumber"
                                    variant="outlined"
                                    value={address.phoneNumber}
                                    onChange={handleInputs}
                                    placeholder="" />
                            </div>
                            <error-output className="name-error"></error-output>
                        </div>
                        <div className="row-content">
                            <label htmlFor="address" className="label text">Address :</label>
                            <TextField id="note" className="input" name="address"
                                variant="outlined"
                                value={address.address}
                                onChange={handleInputs} />
                            <error-output className="name-error"></error-output>
                        </div>
                        <div className="row-content">
                            <div className="column-constrains" style={{ marginLeft: "25px" }}>
                                <div className="column-content">
                                    <label htmlFor="city" className="label text">City :</label>
                                    <select value={address.city} className="input" onChange={handleInputs} id="city" name="city" style={{ width: "90%", height: "55px", paddingRight: "25px" }}>
                                        <option value="Select City"></option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Ahmedabad">Ahmedabad</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Kolkata">Kolkata</option>
                                        <option value="Surat">Surat</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Jaipur">Jaipur</option>
                                        <option value="Lucknow">Lucknow</option>
                                    </select>
                                </div>
                                <div className="column-content">
                                    <label htmlFor="state" className="label text">State :</label>
                                    <select value={address.state} className="input" onChange={handleInputs} id="state" name="state" style={{ width: "90%", height: "55px" }}>
                                        <option value="Select State"></option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                                <div className="column-content">
                                    <label htmlFor="name" className="label text">Zip Code :</label><br />
                                    <div className="input-error">
                                        <TextField style={{ width: "90%" }} id="note" name="zipcode"
                                            variant="outlined"
                                            value={address.zipcode}
                                            onChange={handleInputs} />
                                        <error-output className="name-error"></error-output>
                                    </div>
                                    <error-output className="name-error"></error-output>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-contact">
                            <Button type="submit" className="button button-text" id="submitButton" variant="contained" size="medium" style={{ marginRight: "410px" }}>Add</Button>
                            <Button type="reset" className="button button-text" id="resetButton" variant="contained">Reset</Button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddressBookForm
