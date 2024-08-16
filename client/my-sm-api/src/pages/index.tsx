import api from "@/api";
import { useState, useRef } from "react";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [feedback, setFeedback] = useState();
  const usernameRef = useRef<any>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<any>(null);

  const createUser = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await api.post("/addUser", {
      username: usernameRef.current.value,
      password: passwordRef.current?.value,
      email: emailRef.current.value,
    });
    setFeedback(result.data);
  };
  const fetchUsers = async () => {
    const result = await api.get("/getAllUsers");
    setUsers(result.data);
    console.log(result.data);
  };
  return (
    <div>
      <h1>HomePage</h1>
      <h1>Create a User</h1>
      <form onSubmit={createUser}>
        <table>
          <tr><td><input ref={usernameRef} type="text" placeholder="username" /></td></tr>
          <tr><td><input ref={passwordRef} type="password" placeholder="password" /></td></tr>
          <tr><td><input ref={emailRef} type="email" placeholder="email" /></td></tr>
        </table>
        <button
          className={"mt-4 bg-green-500 text-white border p-2 rounded-md"}
          type="submit"
        >
          Create
        </button>
      </form>
      {feedback && <p>{JSON.stringify(feedback)}</p>}
      <button
        className="mt-4 bg-blue-500 text-white border p-2 rounded-md"
        onClick={fetchUsers}
      >
        Fetch Users
      </button>
      {users && (
        <>
          <h1>List of users: </h1>
          {JSON.stringify(users)}
        </>
      )}
    </div>
  );
}
