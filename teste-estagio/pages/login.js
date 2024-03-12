import LoginCard from "@/components/logincard";
import Input from "../components/Input";
import Button from "@/components/Button";
import styles from "../styles/Login.module.css"
import Link from "next/link";
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')
    const router = useRouter()

    const handleFormEdit = (event, name) => {
        setFormData({...formData, [name]: event.target.value})
    }

    const handleForm = async (event) => {
        try {
            event.preventDefault()
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            const json = await response.json()
            if (response.status !== 200) throw new Error(json)

            setCookie('authorization', json)
            router.push('/home')
        }   catch (err) {
            setError(err.message)
        }
    }


    return(
        <>
            <LoginCard title="Login">
                <form className={styles.form} onSubmit={handleForm}>
                    <Input type="email" placeholder=" Seu email" value={formData.email} required onChange={(e) => {handleFormEdit(e, 'email')}}/>
                    <Input type="password" placeholder=" Sua senha" value={formData.password} required onChange={(e) => {handleFormEdit(e, 'password')}}/>
                    <Button type="submit"> Entrar </Button>
                    {error && <p className={styles.error}>{error}</p>}
                    <Link href={'/cadastro'}> Não tem uma conta? Criar conta:</Link>
                </form>
            </LoginCard>
        </>
    )
}