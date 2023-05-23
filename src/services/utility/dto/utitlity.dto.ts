import { IUtitlity } from "../interface/IUtitlity"

class utilityDTO {
    head: string
    subHead: string
    revenueItem: string
    rates: string
    agency: string
    serviceId: string
    constructor(res: IUtitlity) {
        this.head = res.head
        this.subHead = res.subHead
        this.revenueItem = res.revenueItem
        this.rates = res.rates
        this.agency = res.agency
        this.serviceId = res.serviceId

    }
}