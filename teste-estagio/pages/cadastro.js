import LoginCard from "@/components/logincard";
import Button from "@/components/Button";
import Input from "../components/Input";
import styles from "../styles/Login.module.css";
import Link from 'next/link'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

export default function Cadastro() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    })

    const [error, setError] = useState('')
    const router = useRouter()

    const handleFormEdit = (event, name) => {
        setFormData({...formData, [name]: event.target.value})
    }

    const handleForm = async (event) => {
        try {
            event.preventDefault()
            const response = await fetch('/api/cadastro', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            const json = await response.json()
            if (response.status !== 201) throw new Error(json)

            setCookie('authorization', json)
            router.push('/login')
        }   catch (err) {
            setError(err.message)
        }
    }

    return(
        <>
            <LoginCard title="Criar conta">
                <form onSubmit={handleForm} className={styles.form}>
                    <Input type="text" placeholder=" Seu nome" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
                    <Input type="email" placeholder=" Seu email" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
                    <Input type="password" placeholder=" Sua senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
                    <Input type="phone" placeholder=" Fone: (xx)x.xxxx-xxxx" required value={formData.phone} onChange={(e) => {handleFormEdit(e, 'phone')}}/>
                    <Button type="submit"> Cadastrar </Button>
                    {error && <p className={styles.error}>{error}</p>}
                    <Link href={'/login'}> Já possui uma conta? Faça Login:</Link>
                </form>
            </LoginCard>
        </>
    )
}