## Setup
>git clone {file}
>remove the ".example" from ".env.example"
>create "db.sqlite" file in the "/prisma" file directory
>npm run db:push
>npm run dev
>Open localhost:3000



## Description

Decided to use next.js because it speeds up the setup process and makes everything safer by default bacause all these issues are delegated to others in the community. For the foodfocus project I've decided to make a public forum where any one can share their opinion and best places for good food.

## Technologies

Next.JS - framework for front-end and back-end development. It's on the opinionated side but makes it much easier and faster when creating an MVP for a project

Tailwindcss - Basically a faster way to write css

Prisma - it is an ORM that works perfectly for my usecase in Nextjs and has a good implementation with tRPC

tRPC - stands for Typescript Remote Procedure Call. Instead of producing an API definition for your back end with something like OpenAPI or GraphQL, tRPC directly infers and applies your TypeScript endpoints. It also applies the client-side parameters to the server.
