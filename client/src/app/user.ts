export class User {
  constructor(
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public status: string = "",
    public city: string = "",
    public password: string = "",
    public con_password: string = "",
  ){}
}