import { makeRequest } from "../axios/axios"
import { IRequest } from "../axios/interface/IRequest"
import { IUtitlity } from "./interface/IUtitlity"
import { utilityUrl } from "./routes/utility.routes"

export class utilityService {
    static fetchUtilities = async () => {
        try {
            const response = await makeRequest<IUtitlity>({ url: utilityUrl.getUtilities()});
            return response;

        } catch (error) {
            throw (error);
        }
    }

    static fetchInterSwitchUtilities = async () => {
        try {
            const response = await makeRequest<IUtitlity>({ url: utilityUrl.getInterSwitchUtilities()});
            return response;

        } catch (error) {
            throw (error);
        }
    }
}