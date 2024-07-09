"use server";

import { cookies } from "next/headers";

require("dotenv").config();
const local = process.env.localhost;
async function AuthenticateUser(formData: FormData) {
  try {
    const cookie = cookies();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const response = await fetch(`${local}/kindle/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();
    console.log(data.token, 'TOKEN')
    cookie.set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error);
  }
}

export { AuthenticateUser };
