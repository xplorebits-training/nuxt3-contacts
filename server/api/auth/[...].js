// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import CredentialProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
    name: 'contacts-app',
    pages: {
         signIn: '/signin'
    },
    providers: [
        CredentialProvider.default({
           async authorize (credentials, req) {
                return null
           }
        })
    ]
})
