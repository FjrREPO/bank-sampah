import HomePage from '@/app/home/home'
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home () {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <HomePage session={session}/>
    </div>
  );
}