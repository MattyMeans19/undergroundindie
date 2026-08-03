import {feedPosts} from "@/lib/test-data/dummy-data"
import Image from "next/image"


export default function Feed(){
    return(
        <div className="w-full flex flex-col gap-4">
            {feedPosts.map((post) => (
                <div key={post.postId} className="bg-app-card text-app-text p-4 rounded-lg relative">
                    <button className="absolute top-2 right-2 p-2 text-2xl rounded-full hover:bg-app-secondary/25 active:bg-app-secondary transition-colors duration-200">
                        👍
                    </button>
                    <p>{post.authorId} posted on {post.timestamp}</p>
                    <p>{post.content}</p>
                    <p>{post.likes} likes</p>
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
                                        <p>{comment.authorId} commented on {comment.timestamp}</p>
                                        <p>{comment.content}</p>
                                    </div>
                                ))}    
                            </div>
                            
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}