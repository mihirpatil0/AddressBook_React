import React from 'react'
import addressbook from "../../assets/icons/addressbook.jpeg";
import "./Home1.css";
import { Link } from 'react-router-dom';
import DisplayRecords from './DisplayRecords';

function AddressBookHome() {
    return (
        <div>
            <header className="header-content header">
                <div className="logo-content">
                    <img src={addressbook} alt="Employee Payroll" />
                    <div>
                        <span className="emp-text">ADDRESS</span><br />
                        <span className="emp-text emp-payroll">BOOK</span>
                    </div>
                </div>
            </header>
            <div className="main-content">
                <div className="header-content">
                    <div className="emp-detail-text">
                        Person Details
                    </div>
                    <Link to="/address" className="add-button">
                        <div>Add Person</div>
                    </Link>
                </div>
                <div className="table-main">
                    <DisplayRecords />
                </div>
            </div>
        </div>
    )
}

export default AddressBookHome
