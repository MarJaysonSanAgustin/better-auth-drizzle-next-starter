'use server'
import { auth } from "./lib/auth";

export async function signup(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirm-password')

  if (!name || !email || !password || !confirmPassword) {
    throw new Error('Missing required fields')
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    throw new Error('Invalid input types')
  }

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match')
  }

  try {
    const data = await auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
      }
    });
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export async function signin(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    throw new Error('Missing required fields')
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
    throw new Error('Invalid input types')
  }

  try {
    const data = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
        callbackURL: "/"
      }
    });
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}