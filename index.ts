import type { operations } from "./my-schema";

const getUserResponse: operations["getUsers"]["responses"][200]["content"]["application/json"] = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
];

console.log(getUserResponse);