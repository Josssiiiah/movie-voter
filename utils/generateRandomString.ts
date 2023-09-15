
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Use the USER id as a paremeter and once the string is generated, add it 
// to the table into the array of groupId's associated with the user.

// THis will take time and can recreate the delay effect 

export default async function generateRandomString(time: number = 0) {
  await delay(time);

  const randomString = uuidv4();

  return randomString;
}
