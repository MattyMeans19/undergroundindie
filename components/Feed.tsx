import {feedPosts} from "@/lib/test-data/dummy-data"


export default function Feed(){
    return(
        <div className="w-full flex flex-col gap-4">
            {feedPosts.map((post) => (
                <div key={post.postId} className="bg-app-card text-app-text p-4 rounded-lg">
                    <p>{post.authorId} posted on {post.timestamp}</p>
                    <p>{post.content}</p>
                    <p>{post.likes} likes</p>
                </div>
            ))}
        </div>
    )
}