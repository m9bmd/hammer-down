import { getAllUsers } from "@/actions/user/getAllUser";
import React, { Suspense } from "react";

const page = async () => {
  const users = await getAllUsers();
  const PostLoading = () => <div>loading posts.....</div>;
  return (
    <div className="space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-muted-foreground">All Users ({users?.length})</h1>
      <div className="flex flex-col gap-4">
        <Suspense fallback={<PostLoading />}>
          {users?.map((user) => (
            <div key={user.id} className="border border-secondary p-2 rounded-md">
              <h2 className="text-primary text-lg">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default page;
