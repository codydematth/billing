
export class LoginDto {
    email:string
    password:string

    constructor(req:ILogin) {
        this.email = req.email
        this.password = req.password
        
    }

}