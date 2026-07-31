import { AccountInfo } from "../definitions";

const STORAGE_KEY = "mock_account_info";

const initialAccountInfo: AccountInfo = {
    fName: "",
    lName: "",
    email: "",
    age: "",
    country: "",
    state: "",
    userName: "",
    password: "",
    bio: "",
    primaryRole: "",
    skills: [],
    goals: [],
    profilePic: "",
    projects: [],
    studios: [],
    userId: ""
}

export function getAccountInfo(): AccountInfo {
    if (typeof window === "undefined") return initialAccountInfo;

    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialAccountInfo
}

export function updateAccount(data: AccountInfo){
    const current = getAccountInfo();
    const updated = {...current, ...data};

    if(typeof window !== "undefined"){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }

    console.log("Account Updated: ", updated);
    return updated
}