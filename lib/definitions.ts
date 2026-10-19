export type UserData = {
    id:string,
    email: string,
    password: string,
    createdAt: string,
}

export interface AccountInfo extends UserData{
    fName: string, 
    lName: string,
    userName: string,
    userId: string,
    profilePic: string,
    bio: string,
    primaryRole: string,
    skills: Array<string>,
    goals: Array<string>,
    projects: Array<string>,
    studios: Array<string>
    age: number | string,
    country: string,
    state: string
    tier: string,
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
        commentLikes: number,
        timestamp: string,
        commentReplies: Array<{
            replyId: string,
            authorId: string,
            content: string,
            replyLikes: number,
            timestamp: string
        }>
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

export type prelaunchUser = {
    email: string,
    fname: string,
    lname: string,
    primaryRole: string,
    tier: string,
    timestamp: string
}