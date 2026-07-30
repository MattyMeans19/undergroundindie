export type UserData = {
    fName: string, 
    lName: string,
    email: string,
    age: number | string,
    country: string,
    state: string
}

export interface AccountInfo extends UserData{
    userName: string,
    profilePic: string,
    password: string,
    bio: string,
    primaryRole: string,
    skills: Array<string>,
    goals: Array<string>,
    projects: Array<string>,
    studios: Array<string>
}