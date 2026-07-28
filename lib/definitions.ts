export type UserData = {
    fName: string, 
    lName: string,
    email: string,
    age: number,
    coutnry: string,
    state: string
}

export interface AccountInfo extends UserData{
    userName: string,
    password: string,
    bio: string,
    skills: Array<string>,
    goals: Array<string>
}