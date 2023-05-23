import { LogService } from '../log/LogService';
import { makeRequest } from './../axios/axios';
import { CreateCustomer } from './dto/createCustomer';
import { customerUrl } from './routes/customer.routes';
export class customerService {
    
    static  createCustomer = async (customerData:{}) => {
        try {
            const response = await makeRequest<ICreateCustomer>({'url':customerUrl.addErpCustomer(),'method':'POST','data':customerData})

        if (response?.status !== 200 || 201 ){
            return {
                data: null,
                status: response?.status,
              };
        }
        else{
            return {data: new CreateCustomer(response.data), status: response.status}
        }
        }
        catch(error){
            throw (error);
        }
        
    }

    static fetchCustomersByAgency = async (agency:string) => { 

        // const response = await makeRequest({ url: customerURL.getCustomerByAgency(agency)})
        // console.log(response)
        try {
            const response = await makeRequest({ url: customerUrl.getCustomerByAgency(agency)})
            return response
    
        } catch (error) {
            throw (error);
        }
    }

    static fetchCustomersByCid = async (cid:string) => { 
        try {
            const response = await makeRequest({ url: customerUrl.getCustomerByCid(cid)})
            return response
        } catch (error) {
            throw (error);
        }
    }

}