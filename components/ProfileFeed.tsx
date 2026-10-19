import {profileFeed} from "@/lib/test-data/dummy-data"
import Image from "next/image"
import { getFormattedRelativeTime } from "./HelpFunctions"

export default function ProfileFeed(){
    return(
        <div className="lg:p-10 w-full flex flex-col gap-4 max-h-[55vh] md:max-h-[64vh] lg:max-h-[72vh] overflow-y-scroll inner-scrollbar">
            {profileFeed.map((post) => (
                <div key={post.postId} className="bg-app-card text-app-secondary p-4 rounded-lg border-5 border-app-border relative flex flex-col gap-6 shadow-lg shadow-app-accent">
                    <section className="flex flex-col mb-2 absolute top-2 right-2 p-2">
                        <button className="text-2xl p-3 rounded-full hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                            👍
                            <p className="text-sm">{post.likes} likes</p>
                        </button> 
                    </section>
                    
                    <div className="gap-2 bg-app-primary/30 border-2 border-app-border p-2 rounded-md w-fit">
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
                                {post.comments.map((comment) => (
                                    <div key={comment.commentId} className="bg-app-primary/30 p-5 rounded-lg mt-2 flex flex-col gap-5 border-2 border-app-border">
                                        <p className="flex flex-nowrap gap-5 border-b-5 border-app-accent"><strong className="text-app-accent text-xl">{comment.authorId}</strong> commented {getFormattedRelativeTime(comment.timestamp)}</p>
                                        <p className="md:ml-15 text-lg">{comment.content}</p>
                                        
                                        <section className="flex flex-row justify-between b-2">
                                            <button className="cursor-pointer text-app-accent hover:text-app-accent/80 active:text-app-primary/50 font-bold transition-colors duration-200">
                                                reply
                                            </button>    
                                            <button className="text-2xl rounded-full p-3 hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                                                👍<p className="md:text-end text-sm">{comment.commentLikes} likes</p>
                                            </button>                    
                                        </section>
                                        {comment.commentReplies.map((reply) => (
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
                                    </div>
                                ))}
                                <button className="cursor-pointer w-fit self-center bg-app-accent text-black font-bold hover:bg-app-accent/80 active:bg-app-primary/50 py-2 px-4 rounded-lg transition-colors duration-200">
                                   Comment +
                                </button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}