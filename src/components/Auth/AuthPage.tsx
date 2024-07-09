import Image from "next/image";
import { AuthenticateUser } from "./authfuncs";
import styles from './AuthPage.module.css'
export default async function AuthPage() {
    

  return (
    <section className={styles.section}>
      <article>
        <form className={styles.formArticle} action={AuthenticateUser}>
            <input type="hidden" name='auth' />
          <label htmlFor="">
            <input className={styles.input} name="username" type="text" required placeholder="Username" />
          </label>
          <label htmlFor="">
            <input className={styles.input} name="password" type="text" required placeholder="Password" />
          </label>
          <button className={styles.button} type="submit">Access</button>
        </form>
      </article>
      <article>
        <Image src={'/alexandria.png'} alt="logo" height={150} width={300} />
      </article>
    </section>
  );
}
