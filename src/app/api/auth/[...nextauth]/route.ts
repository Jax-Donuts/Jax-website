import NextAuth from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
;('diagotorres51@gmail.com')
const ADMINS = ['diagotorres51@gmail.com', 'ronnieyin8@gmail.com']

const handler = NextAuth({
  providers: [
    GoogleProvider<GoogleProfile>({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && user.email) {
        token.isAdmin = ADMINS.includes(user.email)
      }
      return token
    },
    async session({ session, token }) {
      session.user.isAdmin = !!token.isAdmin
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }
