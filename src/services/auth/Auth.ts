import { customerService } from '../customer/customer';
import { makeRequest } from './../axios/axios';

const data = {
    email:'kjjj',
    password:"PUT", 
}

const login =  () => {
    makeRequest({'url':'kdkd','data':data})
    makeRequest({data:'d',url:''})
}

export class AuthService {
    static login = async () => {
        const loginResponse = await makeRequest({data:'d',url:''});
    }
    static signup = async () => {
        const sigupResponse = await makeRequest({url:''})
    }

}


// response DTO impelemt interface

// request DTO extends interface



