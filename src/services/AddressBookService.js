import axios from "axios";

const ADDRESSBOOK_BASE_URL = "http://localhost:8080/addressbook";

class AddressBookService {
    // post 
    createAddress(address){
        return axios.post(`${ADDRESSBOOK_BASE_URL}/create`,address);
    }

    //get all records
    getAllAddresses(){
        return axios.get(`${ADDRESSBOOK_BASE_URL}/persons`);
    }

    //delete
    deleteAddress(id){
        return axios.delete(`${ADDRESSBOOK_BASE_URL}/delete/${id}`);
    }

    //get record by id
    getAddressById(id){
        return axios.get(`${ADDRESSBOOK_BASE_URL}/person/${id}`);
    }

    //update record
    updateAddress(newAddress, id){
        return axios.put(`${ADDRESSBOOK_BASE_URL}/update/${id}`,newAddress);
    }
}

export default new AddressBookService();