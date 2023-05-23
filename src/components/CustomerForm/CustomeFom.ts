interface ICustomerForm {
    id: string;
    cId: string;
    balance: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    zone: string;
    subZone: string;
    agency: {};
    transactions: [];
    isOnline: boolean; //added through the app or mobile crm
    isConfirmed: boolean; //captured or pulled by the ERP
    isDeleted: boolean;
}