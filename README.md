# Hammer Down
this is an interactive platform where users can share thoughts & feelings & engage in discussion.<br/>
It allows users to to share their posts, responds to other's post & give a "hammer" - a unique way to show agreement or appreciation for a post.

## Table of Contents
- [Features](#features)
- [How to Use](#how-to-use)
- [Installation](#installation)

## Features
- **User authentication**: Sign up or login in using Auth.js, with the option to authenticate via Google or Github or create a new Account that sends verification. Upon creation of account with credentials verification email is sent to the user to confirm identity.
- **Add Posts**: Create New Posts with a rich text editor powered by TipTap
- **Update Posts**: Edit user's exisiting Posts to keep them relevant.
- **Hammer Posts**: let;s user hammer down the post posted by other users
- **Comment on Posts**: let's user post comments on different posts.
- **Search Posts**: let user search posts based on title, category or author.
- **Delete Posts**: Delete exisitng Posts that are not relevant.
- **Secure Access**: Posts are securely stored in a mongodb database, accessed via Prisma ORM & for speed Prisma Accelerate
- **Modern UI***: Built with Shadcn UI components & designed in clean & modern user interface

## How to Use
1. **Sign Up**: Create a new account or login via Google or Github.
2. **Create a Post**: Once logged in, use the "Create Post" button to create post. You can use the rich text editor to format your Posts as you like.
3. **Update Post**: Go to your Dashboard & click on Posts to find your posts & click on edit button on your desired post to edit it's content
4. **Delete Post**: Go to your Dasboard & click on delete button on your desired posts
5. **Search Posts**: Search Posts based on title, category or author.

 ## Installation

To run the app locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/m9bmd/hammer-down.git
   ```

2. Navigate to the project directory:
   ```sh
   cd hammer-down
   ```

3. Install dependencies using pnpm:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```
## Usage 
Once the app is running locally, open your browser and navigate to http://localhost:3000. This will take you to the home page click the let's go button to read posts posted by other users and hammer it down or reply to their posts.

 ## Technologies Used

- **Next.js 14** App Router.
- **Auth.js** for secure authentication, with support for Google and email-based sign-up.
- **MongoDB**  for database management.
- **Prisma ORM** for database access and querying.
- **Prisma Accelerate**: for speed and caching.
- **ShadCN UI** for a modern user interface.
- **Tiptap** for a rich text editor experience.
- **Tailwind CSS** for styling.
