import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'
import User from '@/models/User'
import Payment from '@/models/Payment'
import mongoose from 'mongoose'
import connectDb from '@/db/connectDb'

export const authoptions =  NextAuth({
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
        if(account.provider == "github" || account.provider == "google"){
          await connectDb()
          const currentUser = await User.findOne({email : email})

          if(!currentUser){
            const newUser = await User.create({
              email : user.email,
              username : user.email.split("@")[0],
            })
          }

          return true; 
        }
      },

      async session({ session, user, token }) {
        const dbUser = await User.findOne({email : session.user.email})

        session.user.name = dbUser.username
        return session
      }

    }
})


export { authoptions as GET, authoptions as POST }