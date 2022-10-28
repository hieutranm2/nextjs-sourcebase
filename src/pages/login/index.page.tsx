import { Button } from '@/components/button/Button'
import { useRouter } from 'next/router'
import styles from './Login.module.scss'

const Login = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.container}>
        <Button label="Back" primary size="small" onClick={router.back} />
        <h1 className={styles.title}>Login</h1>
      </div>
    </>
  )
}

export default Login
