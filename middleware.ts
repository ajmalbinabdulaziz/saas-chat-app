export { default } from "next-auth/middleware"


export const config = {
    matcher: ["/chat", "/chat/:id*", "/register"],
}
 