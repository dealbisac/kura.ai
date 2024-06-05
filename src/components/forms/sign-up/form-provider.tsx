import { AuthContextProvider } from '@/context/use-auth-context'
import React from 'react'
import { FormProvider } from 'react-hook-form'

type Props = {
    children: React.ReactNode
}

const SignupFormProvider = ({children}: Props) => {
  return (
    <AuthContextProvider>
        <FormProvider>
            {children}
        </FormProvider>
    </AuthContextProvider>
  )
}

export default SignupFormProvider