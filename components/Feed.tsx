'use client'

import {feedPosts} from "@/lib/test-data/dummy-data"
import Image from "next/image"
import { getFormattedRelativeTime } from "./HelpFunctions"
import {useState} from "react"
import Post from "./Post"
import { FeedPost } from "@/lib/definitions"

export default function Feed(){
    const [showPost, setShowPost] = useState<boolean>(false);
    const [currentPost, setCurrentPost] = useState<FeedPost>(feedPosts[0] as FeedPost); // Initialize with the first post

    return(
        <div className="w-full flex flex-col gap-3 pb-10 relative">
            {feedPosts.map((post) => (
                <article key={post.postId} className="bg-app-card text-app-secondary p-3 md:p-4 rounded-lg border-5 border-app-border relative flex flex-col gap-3 md:gap-4 shadow-md shadow-app-accent">
                    
                    <div className="flex flex-wrap items-center gap-2 bg-app-primary/30 border-2 border-app-border p-2 rounded-md w-fit">
                        <Image src={post.authorPic} width={500} height={500} alt="Author profile picture" className="rounded-full size-14 md:size-16" />
                        <strong className="text-app-accent text-lg md:text-xl">{post.authorId}</strong>
                        <span className="w-full text-xs text-end">posted {getFormattedRelativeTime(post.timestamp)}</span>
                    </div> 
                    <p className="md:ml-10 bg-app-secondary/30 p-3 text-base md:text-lg rounded-md border-5 border-app-border">{post.content}</p>
                    {post.media.map((mediaItem) => (
                        <div key={mediaItem.mediaId}>
                            {mediaItem.type === "video" && (
                                <video controls width="1920" height="1080" preload="none" className="w-full max-w-3xl max-h-[35vh] place-self-center object-cover rounded-lg">
                                    <source src={mediaItem.url} type="video/mp4" />
                                </video>
                            )} 
                            {mediaItem.type === "image" && (
                                <Image src={mediaItem.url} width={1920} height={1080} alt="Post media" className="w-full max-w-xl max-h-[24vh] place-self-center object-contain rounded-lg" />
                            )}
                            {mediaItem.type === "audio" && (
                                <audio controls className="w-full max-w-xl place-self-center rounded-lg">
                                    <source src={mediaItem.url} type="audio/mpeg" />
                                </audio>
                            )}
                            <div className="w-full h-full flex flex-row flex-nowrap justify-between p-2">
                                <button className="text-xl py-2 px-5 rounded-3xl hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200"
                                onClick={() => {
                                    setShowPost(true);
                                    setCurrentPost(post as FeedPost);
                                }}>
                                    💬
                                    <p className="text-xs">{post.comments.length} comments</p>
                                </button>
                                <button className="text-xl p-2 rounded-3xl hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                                    👍
                                    <p className="text-xs">{post.likes} likes</p>
                                </button> 
                            </div>
                        </div>
                    ))}
                </article>
            ))}
            {showPost && (
                <div className="fixed top-0 left-0 w-full h-full bg-app-bg/90 z-30 flex items-center justify-center">
                    <button className="absolute top-4 right-4 text-app-accent text-2xl hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200" onClick={() => setShowPost(false)}>
                       Close ✕
                    </button>
                    <div className="bg-app-card text-app-secondary p-4 rounded-lg border-5 border-app-border relative flex flex-col gap-6 shadow-md shadow-app-accent max-w-[90%] max-h-[90%] overflow-y-auto inner-scrollbar">
                        <Post post={currentPost} />
                    </div>
                </div>
            )}
        </div>
    )
}