class SignupDto {
    fullname :string
    email:string
    password:string

    constructor(res:ISignup){
        this.fullname = res.firstname + res.lastname
        this.email = res.email
        this.password = res.password
    }
}