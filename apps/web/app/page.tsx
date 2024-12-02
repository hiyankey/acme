import { redirect } from "next/navigation";
import { trpc } from "./lib/trpc";
import { CreateUser } from "./ui/create-user";
import { deleteUser } from "./lib/actions";
import { TrashIcon } from "@iconicicons/react";


export default async function Home() {
  const users = await trpc.getUsers.query()
  return (
    <main>
      <CreateUser />
      <ul className="space-y-2 flex flex-col max-w-[600px] mx-auto mt-[32px]">{
        users.map(user =>
          <li key={user.id} className="flex">{user.profile?.name}&nbsp;{user.email}
            <form action={deleteUser}>
              <input type="hidden" name="id" value={+user.id as number} /><button className="px-1 py-[2px] rounded-[8px] border-[2px] border-neutral-100 bg-white shadow-sm inline-block"><TrashIcon width={18} /></button></form>
          </li>
        )
      }</ul>
    </main>
  );
}
