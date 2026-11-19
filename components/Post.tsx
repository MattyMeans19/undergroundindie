'use client';

import Image from "next/image"
import { getFormattedRelativeTime } from "./HelpFunctions"
import { useState } from "react"
import type { FeedPost } from "@/lib/definitions"

interface PostProps {
    post: FeedPost ;
}

export default function Post({ post }: PostProps){
    const [expandedReplies, setExpandedReplies] = useState<string[]>([]);
    const [showCommentInput, setShowCommentInput] = useState<boolean>(false);
    const [showReplyInput, setShowReplyInput] = useState<boolean>(false);

    return(
        <div className="w-full flex flex-col gap-4 max-h-full">
                <div className="bg-app-card text-app-secondary p-4 rounded-lg border-5 border-app-border relative flex flex-col gap-6 shadow-md shadow-app-accent">
                    <section className="flex flex-col mb-2 absolute top-2 right-2 p-2">
                        <button className="text-2xl p-3 rounded-full hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                            👍
                            <p className="text-sm">{post.likes} likes</p>
                        </button> 
                    </section>
                    
                    <div className="flex flex-wrap gap-2 bg-app-primary/30 border-2 border-app-border p-2 rounded-md w-fit">
                        <Image src={post.authorPic} width={500} height={500} alt="Author profile picture" className="rounded-full basis-1/4 size-20" />
                        <strong className="basis-1/2 text-app-accent text-2xl text-center content-center">{post.authorId}</strong> 
                        <span className="w-full text-sm text-end">posted {getFormattedRelativeTime(post.timestamp)}</span>
                    </div> 
                    <p className="md:ml-15 bg-app-primary/30 p-5 text-2xl rounded-md border-2 border-app-border">{post.content}</p>
                    {post.media.map((mediaItem) => (
                        <div key={mediaItem.mediaId}>
                            {mediaItem.type === "video" && (
                                <video controls width="1920" height="1080" preload="none" className="w-[80%] h-[40vh] place-self-center object-cover rounded-lg">
                                    <source src={mediaItem.url} type="video/mp4" />
                                </video>
                            )} 
                            {mediaItem.type === "image" && (
                                <Image src={mediaItem.url} width={1920} height={1080} alt="Post media" className="w-[50%] h-[20vh] place-self-center rounded-lg" />
                            )}
                            {mediaItem.type === "audio" && (
                                <audio controls className="w-[50%] h-[20vh] place-self-center rounded-lg">
                                    <source src={mediaItem.url} type="audio/mpeg" />
                                </audio>
                            )}
                            <div className="mt-2 contentWindow">
                                <p className="font-semibold underline text-center text-xl">Comments:</p>
                                {post.comments.map((comment) => {
                                    const replyGroupId = `${post.postId}:${comment.commentId}`;
                                    const showAllReplies = expandedReplies.includes(replyGroupId);

                                    return (
                                    <div key={comment.commentId} className="bg-app-primary/30 p-5 rounded-lg mt-2 flex flex-col gap-5 border-2 border-app-border">
                                        <p className="flex flex-nowrap gap-5 border-b-5 border-app-accent"><strong className="text-app-accent text-xl">{comment.authorId}</strong> commented {getFormattedRelativeTime(comment.timestamp)}</p>
                                        <p className="md:ml-15 text-lg">{comment.content}</p>
                                        
                                        <section className="flex flex-row justify-between b-2">
                                            <div className="flex flex-col justify-center gap-1">
                                                <span className="text-end font-bold">replies ({comment.commentReplies.length})</span>
                                                <button className="cursor-pointer text-app-accent hover:text-app-accent/80 active:text-app-primary/50 font-bold transition-colors duration-200"
                                                    onClick={() => setShowReplyInput(true)}>
                                                    reply
                                                </button>    
                                            </div>
                                               
                                            <button className="text-2xl rounded-full p-3 hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                                                👍<p className="md:text-end text-sm">{comment.commentLikes} likes</p>
                                            </button>                    
                                        </section>
                                        {comment.commentReplies.slice(showAllReplies ? 0 : 1).map((reply) => (
                                            <div key={reply.replyId} className="bg-app-primary/30 p-5 rounded-lg mt-2 flex flex-col gap-5 border-2 border-app-border">
                                                <p className="flex flex-nowrap gap-5 border-b-5 border-app-accent"><strong className="text-app-accent text-xl">{reply.authorId}</strong> replied {getFormattedRelativeTime(reply.timestamp)}</p>
                                                <p className="md:ml-15 text-lg">{reply.content}</p>
                                                <section className="flex flex-row place-self-end b-2">
                                                    <button className="text-2xl rounded-full p-3 hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                                                        👍<p className="md:text-end text-sm">{reply.replyLikes} likes</p>
                                                    </button>
                                                </section>
                                            </div>
                                        ))}
                                        {comment.commentReplies.length > 0 && (
                                            <button
                                                type="button"
                                                aria-expanded={showAllReplies}
                                                onClick={() => setExpandedReplies((expanded) =>
                                                    expanded.includes(replyGroupId)
                                                        ? expanded.filter((id) => id !== replyGroupId)
                                                        : [...expanded, replyGroupId]
                                                )}
                                                className="cursor-pointer self-center text-app-accent hover:text-app-accent/80 font-bold transition-colors duration-200"
                                            >
                                                {showAllReplies ? "Hide replies" : "Show all replies"}
                                            </button>
                                        )}
                                    </div>
                                    );
                                })}
                                <button className="cursor-pointer w-fit self-center bg-app-accent text-black font-bold hover:bg-app-accent/80 active:bg-app-primary/50 py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={() => setShowCommentInput(!showCommentInput)}
                                >
                                   Comment +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {showCommentInput && (
                    <div className="bg-app-card/60 text-app-secondary p-4 rounded-lg border-5 border-app-border fixed w-screen h-screen place-self-center top-0 z-50">
                        <div className="flex flex-col gap-4 w-full h-full p-10 justify-center">
                            <p className="text-center font-bold text-xl">Add a comment:</p>
                            <textarea placeholder="Write your comment here..." className=" w-full h-[40vh] p-2 rounded-md border-2 border-app-border bg-app-card text-2xl resize-none focus:outline-none focus:ring-2 focus:ring-app-accent"></textarea>
                            <div className="flex flex-row gap-4 justify-center">
                                <button className="self-center bg-app-accent text-black font-bold hover:bg-app-accent/80 active:bg-app-primary/50 py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={() => {
                                    // Handle comment submission logic here
                                    setShowCommentInput(false); // Close the comment input after submission
                                }}
                                >
                                    Submit Comment
                                </button>
                                <button className="self-center bg-app-accent text-black font-bold hover:bg-app-accent/80 active:bg-app-primary/50 py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={() => setShowCommentInput(false)}
                                >
                                    Cancel
                                </button>     
                            </div>
                               
                        </div>
                        
                    </div>
                )}
                {showReplyInput && (
                    <div className="bg-app-card/60 text-app-secondary p-4 rounded-lg border-5 border-app-border fixed w-screen h-screen place-self-center top-0 z-50">
                        <div className="flex flex-col gap-4 w-full h-full p-10 justify-center">
                            <p className="text-center font-bold text-xl">Add a reply:</p>
                            <textarea placeholder="Write your reply here..." className=" w-full h-[40vh] p-2 rounded-md border-2 border-app-border bg-app-card text-2xl resize-none focus:outline-none focus:ring-2 focus:ring-app-accent"></textarea>
                            <div className="flex flex-row gap-4 justify-center">
                                <button className="self-center bg-app-accent text-black font-bold hover:bg-app-accent/80 active:bg-app-primary/50 py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={() => {
                                    // Handle reply submission logic here
                                    setShowReplyInput(false); // Close the reply input after submission
                                }}
                                >
                                    Submit Reply
                                </button>
                                <button className="self-center bg-app-accent text-black font-bold hover:bg-app-accent/80 active:bg-app-primary/50 py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={() => setShowReplyInput(false)}
                                >
                                    Cancel
                                </button>     
                            </div>
                               
                        </div>
                        
                    </div>
                )}
        </div>
    )
}