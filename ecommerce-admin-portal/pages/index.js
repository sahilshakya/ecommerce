import Layout from "@/component/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-700 flex  justify-center">
        <h2>
          Hello, <b>{session?.user?.email}</b>
        </h2>
        <div>
          <img src={session?.user?.image}></img>
          <span>{session?.user?.email}</span>
        </div>
      </div>
    </Layout>
  );
}
