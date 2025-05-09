import {serve} from "inngest/next"
import {createUserOrder, inngest, syncUserCreation, syncUserDeletion, syncUserUpdation} from "@/config/inngest"

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
       //all functions to handle inngest will be defined here
       syncUserCreation,
       syncUserUpdation,
       syncUserDeletion,
       createUserOrder
    ],
})