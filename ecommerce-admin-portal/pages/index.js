import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 rounded-lg gap-1">
          <img src={session?.user?.image} className="w-8 h-8" />
          <span className="px-2">{session?.user?.email}</span>
        </div>
      </div>
    </Layout>
  );
}
