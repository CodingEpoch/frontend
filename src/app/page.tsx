import Image from 'next/image'
import styles from './page.module.css'
import AuthPage from '@/components/Auth/AuthPage';
import { cookies } from 'next/headers'
import BookListMain from '@/components/Book/BookList/Main';
import dynamic from 'next/dynamic';
import { act } from 'react';
import {redirect} from 'next/navigation'
export default async function Home() {
  let activeToken;
  try{
    const cookie = cookies()
    const token = cookie.get('token')
    activeToken = token
  }catch(error){
    console.log(error)
  }
  if(activeToken){
    redirect('/genre/All')
  }
  return (
    <main className={styles.main}>
        <AuthPage />
    </main>
  )
}
