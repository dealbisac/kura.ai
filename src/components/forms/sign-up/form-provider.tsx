import { AuthContextProvider } from '@/context/use-auth-context'
import { useSignUpForm } from '@/hooks/use-sign-up'
import React from 'react'
import { FormProvider } from 'react-hook-form'

type Props = {
    children: React.ReactNode
}

const SignupFormProvider = ({children}: Props) => {
    const {methods, onHandleSubmit, loading} = useSignUpForm()
  
    return (
    <AuthContextProvider>
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    </AuthContextProvider>
  )
}

export default SignupFormProvider