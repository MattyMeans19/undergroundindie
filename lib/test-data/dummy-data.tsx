import MRJupiter from "@/lib/test-data/Mr_Jupiter.png"


export const feedPosts= [
  {
    "postId": "post-101",
    "authorId": "user-8812",
    "authorPic": "/profile-pics/PsycoMike.jpg",
    "content": "Just launched the first build of my new app! Excited to share updates as we keep testing features.",
    "timestamp": "2026-08-02T14:32:00Z",
    "likes": 24,
    "comments": [
      {
        "commentId": "comment-301",
        "authorId": "user-4402",
        "content": "Congrats! Looking forward to trying it out.",
        "commentLikes": 5,
        "timestamp": "2026-08-02T14:45:12Z",
        "commentReplies": [
          {
            "replyId": "reply-401",
            "authorId": "user-8812",
            "content": "Thanks! I'll be posting a beta link soon.",
            "replyLikes": 2,
            "timestamp": "2026-08-02T15:15:00Z"
          },
        ]

      },
      {
        "commentId": "comment-302",
        "authorId": "user-9120",
        "content": "Awesome progress. Is there a beta link available?",
        "commentLikes": 15,
        "timestamp": "2026-08-02T15:10:05Z"
,
        "commentReplies": [
          {
            "replyId": "reply-401",
            "authorId": "user-8812",
            "content": "Yes, I'll send it out soon!",
            "replyLikes": 2,
            "timestamp": "2026-08-02T15:15:00Z"
          }
        ]
      }
    ],
    "media": [{
      "mediaId": "media-201",
      "type": "video",
      "url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }]
  },
  {
    "postId": "post-102",
    "authorId": "user-3319",
    "authorPic": "/profile-pics/unimpressedfox.jpg",
    "content": "Spent the whole morning setting up new database schemas. Always satisfying when everything compiles without a hitch.",
    "timestamp": "2026-08-01T09:15:30Z",
    "likes": 12,
    "comments": [
      {
        "commentId": "comment-303",
        "authorId": "user-8812",
        "content": "Clean schemas are a luxury! What ORM/database are you using?",
        "commentLikes": 3,
        "timestamp": "2026-08-01T09:40:00Z",
        "commentReplies": [
          {
            "replyId": "reply-401",
            "authorId": "user-8812",
            "content": "Currently using Drizzle with Supabase!",
            "replyLikes": 2,
            "timestamp": "2026-08-02T15:15:00Z"
          }
        ]

      }
    ],
    "media": [{
      "mediaId": "media-202",
      "type": "image",
      "url": ""
    }]
  },
  {
    "postId": "post-103",
    "authorId": "user-5541",
    "authorPic": "/profile-pics/GustavProto.png",
    "content": "Made some progress on the audio processing module. Still need to optimize the filters, but it's getting there.",
    "timestamp": "2026-07-31T18:20:00Z",
    "likes": 7,
    "comments": [],
    "media": [{
      "mediaId": "media-203",
      "type": "audio",
      "url": ""
    }]
  }
]

export const profileFeed = [
  {
    "postId": "post-101",
    "authorId": "Mr. Jupiter",
    "authorPic": "/profile-pics/Mr_Jupiter.png",
    "content": "Just launched the first build of my new app! Excited to share updates as we keep testing features.",
    "timestamp": "2026-08-02T14:32:00Z",
    "likes": 24,
    "comments": [
      {
        "commentId": "comment-301",
        "authorId": "user-4402",
        "content": "Congrats! Looking forward to trying it out.",
        "commentLikes": 5,
        "timestamp": "2026-08-02T14:45:12Z",
        "commentReplies": [
          {
            "replyId": "reply-401",
            "authorId": "Mr. Jupiter",
            "content": "Thanks! I'll be posting a beta link soon.",
            "replyLikes": 2,
            "timestamp": "2026-08-02T15:15:00Z"
          }
        ]
      },
      {
        "commentId": "comment-302",
        "authorId": "user-9120",
        "content": "Awesome progress. Is there a beta link available?",
        "commentLikes": 15,
        "timestamp": "2026-08-02T15:10:05Z",
        "commentReplies": [
          {
            "replyId": "reply-401",
            "authorId": "Mr. Jupiter",
            "content": "Yes, I'll send it out soon!",
            "replyLikes": 2,
            "timestamp": "2026-08-02T15:15:00Z"
          }
        ]
      }
    ],
    "media": [{
      "mediaId": "media-201",
      "type": "video",
      "url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }]
  },
  {
    "postId": "post-102",
    "authorId": "Mr. Jupiter",
    "authorPic": "/profile-pics/Mr_Jupiter.png",
    "content": "Spent the whole morning setting up new database schemas. Always satisfying when everything compiles without a hitch.",
    "timestamp": "2026-08-01T09:15:30Z",
    "likes": 12,
    "comments": [
      {
        "commentId": "comment-303",
        "authorId": "uesr-1082",
        "content": "Clean schemas are a luxury! What ORM/database are you using?",
        "commentLikes": 3,
        "timestamp": "2026-08-01T09:40:00Z",
        "commentReplies": [
          {
            "replyId": "reply-401",
            "authorId": "Mr. Jupiter",
            "content": "Currently using Drizzle with Supabase!",
            "replyLikes": 2,
            "timestamp": "2026-08-02T15:15:00Z"
          }
        ]
      }
    ],
    "media": [{
      "mediaId": "media-202",
      "type": "image",
      "url": ""
    }]
  },
  {
    "postId": "post-103",
    "authorId": "Mr. Jupiter",
    "authorPic": "/profile-pics/Mr_Jupiter.png",
    "content": "Made some progress on the audio processing module. Still need to optimize the filters, but it's getting there.",
    "timestamp": "2026-07-31T18:20:00Z",
    "likes": 7,
    "comments": [],
    "media": [{
      "mediaId": "media-203",
      "type": "audio",
      "url": ""
    }]
  }
]

export const accountInfo = {
  "id": "uuid-1234",
  "fName": "Matthew",
  "lName": "Means",
  "username": "Mr. Jupiter",
  "bio": "Software engineer and tech enthusiast. Passionate about building innovative solutions and exploring new technologies.",
  "primaryRole": "Game Developer",
  "skills": ["JavaScript", "TypeScript", "React", "Node.js", "Python"],
  "goals": ["Contribute to open-source projects", "Develop a successful indie game", "Learn advanced AI techniques"],
  "projects": ["Project A", "Project B", "Project C"],
  "studios": ["Studio X", "Studio Y"],
  "profilePic": MRJupiter,
  "age": 33,
  "country": "USA",
  "state": "New Mexico",
}