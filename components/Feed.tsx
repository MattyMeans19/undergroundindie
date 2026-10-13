import {feedPosts} from "@/lib/test-data/dummy-data"
import Image from "next/image"
import { getFormattedRelativeTime } from "./HelpFunctions"


export default function Feed(){
    return(
        <div className="w-full flex flex-col gap-4">
            {feedPosts.map((post) => (
                <div key={post.postId} className="bg-app-card text-app-secondary p-4 rounded-lg relative">
                    <section className="flex flex-col mb-2 absolute top-2 right-2 p-2">
                        <button className="text-2xl rounded-full hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                            👍
                        </button> 
                        <p className="md:text-end">{post.likes} likes</p>
                    </section>
                    
                    <p>{post.authorId} posted {getFormattedRelativeTime(post.timestamp)}</p>
                    <p>{post.content}</p>
                    {post.media.map((mediaItem) => (
                        <div key={mediaItem.mediaId}>
                            {mediaItem.type === "video" && (
                                <video controls width="1920" height="1080" preload="none" className="w-[50%] h-[20vh] place-self-center object-cover rounded-lg">
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
                                    <div key={comment.commentId} className="bg-app-card text-app-text p-2 rounded-lg mt-2">
                                        <p>{comment.authorId} commented {getFormattedRelativeTime(comment.timestamp)}</p>
                                        <p>{comment.content}</p>
                                        <button className="cursor-pointer text-end w-full text-app-accent hover:text-app-accent/80 active:text-app-primary/50 font-bold transition-colors duration-200">
                                            reply
                                        </button>
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