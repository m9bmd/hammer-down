# Hammer Down

Hammer Down is an interactive platform where users can share their thoughts and feelings and engage in discussions. It allows users to share their posts, respond to others' posts, and give a "hammer"—a unique way to show agreement or appreciation for a post.

## Table of Contents
- [Features](#features)
- [How to Use](#how-to-use)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features
- **User Authentication**: Sign up or log in using Auth.js, with the option to authenticate via Google or GitHub, or create a new account that requires email verification. A verification email will be sent to confirm the user's identity upon account creation.
- **Admin**: Admins have the ability to delete posts and view statistics, including the total number of posts and users on the website.
- **Add Posts**: Create new posts with a rich text editor powered by TipTap,with a  preview button to review content before posting.
- **Update Posts**: Edit existing posts to keep them relevant.
- **Hammer Posts**: Allows users to "hammer down" posts made by others.
- **Comment on Posts**: Users can post comments on different posts.
- **Search Posts**: Search posts based on title, category, or author.
- **Delete Posts**: Remove existing posts that are no longer relevant.
- **Secure Access**: Posts are securely stored in a MongoDB database, accessed via Prisma ORM with Prisma Accelerate for speed.
- **Modern UI**: Built with Shadcn UI components and designed with a clean, modern user interface.

## How to Use
1. **Sign Up**: Create a new account or log in via Google or GitHub.
2. **Create a Post**: Once logged in, use the "Create Post" button to create a post. You can format your post using the rich text editor.
3. **Update Post**: Go to your Dashboard and click on "Posts" to find your posts. Click the edit button on your desired post to update its content.
4. **Delete Post**: Go to your Dashboard and click the delete button on your desired post.
5. **Search Posts**: Search posts based on title, category, or author.
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
