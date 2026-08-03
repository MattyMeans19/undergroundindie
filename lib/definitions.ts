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
    userId: string,
    profilePic: string,
    password: string,
    bio: string,
    primaryRole: string,
    skills: Array<string>,
    goals: Array<string>,
    projects: Array<string>,
    studios: Array<string>
}

export type FeedPost = {
    postId: string,
    authorId: string,
    content: string,
    timestamp: string,
    likes: number,
    comments: Array<{
        commentId: string,
        authorId: string,
        content: string,
        timestamp: string
    }>
    media: Array<{
        mediaId: string,
        type: "image" | "video" | "audio",
        url: string
    }>
}

export type Project = {
    projectId: string,
    name: string,
    description: string,
    ownerId: string,
    members: Array<string>,
    media: Array<{
        mediaId: string,
        type: "image" | "video" | "audio",
        url: string
    }>
    openRoles: Array<{
        roleId: string,
        title: string,
        description: string
    }>
    helpWanted: boolean,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
}

export type Studio = {
    studioId: string,
    name: string,
    description: string,
    ownerId: string,
    members: Array<{ userId: string , role: string }>,
    projects: Array<string>,
    openRoles: Array<{
        roleId: string,
        title: string,
        description: string
    }>
    StudioPluse: boolean,
    announcements: Array<{
        announcementId: string,
        content: string,
        timestamp: string
    }>
    createdAt: string,
}

export type Message = {
    messageId: string,
    senderId: string,
    receiverId: string,
    content: string,
    media: Array<{
        mediaId: string,
        type: "image" | "video" | "audio",
        url: string
    }>,
    timestamp: string,
    read: boolean
}