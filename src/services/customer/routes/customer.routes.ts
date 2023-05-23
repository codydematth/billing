// const customerBaseUrl = `${process.env.BASE_URL}/customer`
// const customerBaseUrl = `http://localhost:4700/lead-api/customer`
const customerBaseUrl = `http://46.101.26.184:4700/lead-api/customer`




export const customerUrl = {
    addErpCustomer : () => `${customerBaseUrl}/erp-one`,
    getCustomerByCid : (cid:string) => `${customerBaseUrl}/id/${cid}`,
    getCustomerByAgency : (agency:string) => `${customerBaseUrl}/agency/${agency}`,
    getCustomerByAgencyErp : (agency:string) => `${customerBaseUrl}/agency-erp/${agency}`,
    getCustomerByTransactionErp : (agency:string) => `${customerBaseUrl}/transaction-erp/${agency}`,
    getCustomers : () => `${customerBaseUrl}/customers`,
    
}



// CUSTOMER: '/customer',
// ADD_ERP_CUSTOMERS: '/erp-many',
// ADD_ERP_CUSTOMER: '/erp-one',

// GET_CUSTOMER_BY_CID: '/id/:val',
// GET_CUSTOMER_BY_AGENCY: '/agency/:val',
// GET_CUSTOMER_BY_AGENCY_ERP: '/agency-erp/:val',
// GET_CUSTOMER_BY_TRANSACTION_ERP: '/transaction-erp/:val',
// GET_CUSTOMERS: '/customers',
// UPDATE_ERP_CUSTOMERS_BALANCES: '/erp-customers-balances',
// UPDATE_CUSTOMER_BALANCES: '/update-balances',

