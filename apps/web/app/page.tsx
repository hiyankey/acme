import { redirect } from "next/navigation";
import { trpc } from "./lib/trpc";
import { CreateUser } from "./ui/create-user";
import { deleteUser } from "./lib/actions";


export default async function Home() {
  const users = await trpc.getUsers.query()
  return (
    <main>
      <CreateUser />
      <ul>{
        users.map(user =>
          <li key={user.id}>{user.profile?.name}&nbsp;{user.email}
            <form action={deleteUser}>
              <input type="hidden" name="id" value={+user.id as number} /><button>Delete</button></form>
          </li>
        )
      }</ul>
    </main>
  );
}
