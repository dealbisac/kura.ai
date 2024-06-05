import { useToast } from '@/components/ui/use-toast'
import { UserRegistrationProps, UserRegistrationSchema } from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useClerk, useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useSignUpForm = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean(false)
    const { signUp, isLoaded, setActive } = useSignUp()
    const router = useRouter()
    const methods = useForm(<UserRegistrationProps>({
        resolver: zodResolver(UserRegistrationSchema),
    }))


}