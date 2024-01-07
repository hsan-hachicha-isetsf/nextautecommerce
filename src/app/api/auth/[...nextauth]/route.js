import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
providers: [
GitHubProvider({
clientId: "8ae91e7483780c86e578",
clientSecret: "a10f093c2d1eb2253b7e3149e8f42b11dafe9fc0",
}),
GoogleProvider({
clientId: "987286969751-6bashv381ea0od5cm69j3rd6io3mo7ms.apps.googleusercontent.com",
clientSecret: "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"
})
],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }