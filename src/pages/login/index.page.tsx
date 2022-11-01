import { Button } from '@/components/button/Button'
import { useRouter } from 'next/router'
import styles from './Login.style'

const Login = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.container}>
        <Button color="secondary" size="small" onClick={router.back}>
          Back
        </Button>
        <h1 className="text-2xl">Login</h1>
      </div>
    </>
  )
}

export default Login
