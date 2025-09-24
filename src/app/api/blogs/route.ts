import { NextResponse } from "next/server";

export const blogs = [
    {
        "id": 18,
        "title": "Tailwind CSS Best Practices",
        "content": "Style your projects faster and cleaner with Tailwind CSS techniques.",
        "thumbnail": "https://ibb.co.com/Xfc6JgfY",
        "isFeatured": true,
        "tags": [
            "tailwind",
            "css",
            "frontend"
        ],
        "views": 0,
        "authorId": 1,
        "createdAt": "2025-09-24T13:07:37.046Z",
        "updatedAt": "2025-09-24T13:07:37.046Z",
        "author": {
            "id": 1,
            "name": "Ayub Khan",
            "email": "ayub@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01711111111",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-13T20:18:14.798Z",
            "updatedAt": "2025-09-14T18:16:20.119Z"
        }
    },
    {
        "id": 17,
        "title": "Getting Started with React",
        "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F5992673%2Fcover_image%2Fretina_500x200%2F1005_Design-Patterns-in-React_Cover-4ac39f45a8b10eff8e80b0b54aa11bdd.png",
        "isFeatured": true,
        "tags": [
            "Next.js",
            "React",
            "Web Development"
        ],
        "views": 6,
        "authorId": 1,
        "createdAt": "2025-09-22T18:54:11.259Z",
        "updatedAt": "2025-09-23T18:22:33.825Z",
        "author": {
            "id": 1,
            "name": "Ayub Khan",
            "email": "ayub@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01711111111",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-13T20:18:14.798Z",
            "updatedAt": "2025-09-14T18:16:20.119Z"
        }
    },
    {
        "id": 16,
        "title": "Getting Started with Next.js",
        "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Next.js",
            "React",
            "Web Development"
        ],
        "views": 9,
        "authorId": 1,
        "createdAt": "2025-09-22T18:34:45.666Z",
        "updatedAt": "2025-09-24T13:46:00.782Z",
        "author": {
            "id": 1,
            "name": "Ayub Khan",
            "email": "ayub@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01711111111",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-13T20:18:14.798Z",
            "updatedAt": "2025-09-14T18:16:20.119Z"
        }
    },
    {
        "id": 15,
        "title": "Top 10 VSCode Extensions",
        "content": "Boost your productivity with these VSCode extensions.",
        "thumbnail": "https://picsum.photos/seed/vscode/400/200",
        "isFeatured": false,
        "tags": [
            "vscode",
            "productivity",
            "extensions"
        ],
        "views": 3,
        "authorId": 7,
        "createdAt": "2025-09-15T13:28:59.061Z",
        "updatedAt": "2025-09-23T18:22:42.232Z",
        "author": {
            "id": 7,
            "name": "Rahim",
            "email": "rahim@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01712345675",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-15T13:27:50.457Z",
            "updatedAt": "2025-09-15T13:27:50.457Z"
        }
    },
    {
        "id": 13,
        "title": "Scaling Express Apps",
        "content": "Tips and techniques to scale your Express.js applications.",
        "thumbnail": "https://picsum.photos/seed/express/400/200",
        "isFeatured": true,
        "tags": [
            "express",
            "scaling",
            "backend"
        ],
        "views": 10,
        "authorId": 5,
        "createdAt": "2025-09-15T13:28:37.169Z",
        "updatedAt": "2025-09-23T18:22:46.510Z",
        "author": {
            "id": 5,
            "name": "Sarmin Khan",
            "email": "sarmin@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01712345673",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-15T13:27:14.543Z",
            "updatedAt": "2025-09-15T13:27:14.543Z"
        }
    },
    {
        "id": 6,
        "title": "TypeScript Best Practices",
        "content": "How to write clean, scalable and maintainable TypeScript code.",
        "thumbnail": "https://picsum.photos/seed/typescript/400/200",
        "isFeatured": false,
        "tags": [
            "typescript",
            "clean-code",
            "best-practices"
        ],
        "views": 10,
        "authorId": 3,
        "createdAt": "2025-09-15T13:22:18.492Z",
        "updatedAt": "2025-09-23T15:18:19.979Z",
        "author": {
            "id": 3,
            "name": "Sajjad Khan",
            "email": "sajjad@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01712345672",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-14T16:31:10.681Z",
            "updatedAt": "2025-09-14T16:31:10.681Z"
        }
    },
    {
        "id": 5,
        "title": "Next.js 15 New Features",
        "content": "What's new in Next.js 15 and how to use it in real projects.",
        "thumbnail": "https://picsum.photos/seed/next/400/200",
        "isFeatured": true,
        "tags": [
            "nextjs",
            "react",
            "fullstack"
        ],
        "views": 8,
        "authorId": 3,
        "createdAt": "2025-09-15T13:22:06.591Z",
        "updatedAt": "2025-09-23T15:18:19.859Z",
        "author": {
            "id": 3,
            "name": "Sajjad Khan",
            "email": "sajjad@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01712345672",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-14T16:31:10.681Z",
            "updatedAt": "2025-09-14T16:31:10.681Z"
        }
    },
    {
        "id": 4,
        "title": "MongoDB vs PostgreSQL",
        "content": "A detailed comparison between MongoDB and PostgreSQL databases.",
        "thumbnail": "https://picsum.photos/seed/mongo/400/200",
        "isFeatured": false,
        "tags": [
            "mongodb",
            "postgresql",
            "database"
        ],
        "views": 2,
        "authorId": 2,
        "createdAt": "2025-09-15T13:21:47.805Z",
        "updatedAt": "2025-09-23T15:18:28.651Z",
        "author": {
            "id": 2,
            "name": "Faisal Khan",
            "email": "faisal@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01712345671",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-14T16:30:52.549Z",
            "updatedAt": "2025-09-14T16:30:52.549Z"
        }
    },
    {
        "id": 3,
        "title": "Exploring Prisma ORM",
        "content": "Understand how to use Prisma ORM with PostgreSQL and MySQL.",
        "thumbnail": "https://picsum.photos/seed/prisma/400/200",
        "isFeatured": true,
        "tags": [
            "prisma",
            "database",
            "typescript"
        ],
        "views": 7,
        "authorId": 1,
        "createdAt": "2025-09-14T18:11:30.142Z",
        "updatedAt": "2025-09-24T12:51:12.613Z",
        "author": {
            "id": 1,
            "name": "Ayub Khan",
            "email": "ayub@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01711111111",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-13T20:18:14.798Z",
            "updatedAt": "2025-09-14T18:16:20.119Z"
        }
    },
    {
        "id": 2,
        "title": "Node.js Performance Tips",
        "content": "Learn how to optimize Node.js apps for better performance.",
        "thumbnail": "https://picsum.photos/seed/node/400/200",
        "isFeatured": false,
        "tags": [
            "node",
            "backend",
            "performance"
        ],
        "views": 4,
        "authorId": 2,
        "createdAt": "2025-09-14T18:11:13.144Z",
        "updatedAt": "2025-09-23T15:18:28.604Z",
        "author": {
            "id": 2,
            "name": "Faisal Khan",
            "email": "faisal@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01712345671",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-14T16:30:52.549Z",
            "updatedAt": "2025-09-14T16:30:52.549Z"
        }
    }
]



export async function GET() {
    return Response.json(blogs)
}

export const POST = async (request: Request) => {
    const blog = await request.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1,
    };
    blogs.push(newBlog);

    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-type": "application/json",
        },
    });
};