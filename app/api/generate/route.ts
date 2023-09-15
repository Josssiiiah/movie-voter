import generateRandomString from "@/utils/generateRandomString";

export async function GET(request: Request) {
  const randomString = await generateRandomString(0);
  console.log(randomString);

  return new Response(randomString);
}
