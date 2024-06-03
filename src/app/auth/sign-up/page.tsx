import SignupFormProvider from '@/components/forms/sign-up/form-provider'
import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className='flex-1 py-36 md:px-16 w-full'>
      <div className="flex flex-col h-full gap-3">
        <SignupFormProvider>
          <h1 className="text-4xl font-bold">Sign up</h1>
        </SignupFormProvider>
      </div>
    </div>
  )
}

export default SignUp