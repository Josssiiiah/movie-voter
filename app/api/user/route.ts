import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request) {
  const groupId = await req.json();
  const user = await currentUser();

  // Add the new group to the groupData list
  if (user) {
    let group = {
      groupId: groupId,
      creatorName: user.firstName,
      userId: user.id,
    };
    let group_stringified = JSON.stringify(group);

    // Stringify the group object and append it to the groupData list
    await kv.rpush("groupData", group_stringified);
  } else {
    throw new Error("User is not defined");
  }

  // After adding the new group to the groupData list, retrieve all groups
  const groupData = await kv.lrange("groupData", 0, -1);

  console.log(await kv.lrange("groupData", 0, -1));

  return NextResponse.json({ groupData: groupData });
}
