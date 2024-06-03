import { AuthContextProvider } from '@/context/use-auth-context'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SignupFormProvider = ({children}: Props) => {
  return (
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
  )
}

export default SignupFormProvider