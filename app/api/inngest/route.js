import {serve} from "inngest/next"
import {inngest, syncUserCreation, syncUserDeletion, syncUserUpdation} from "@/config/inngest"

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
       //all functions to handle inngest will be defined here
       syncUserCreation,
       syncUserUpdation,
       syncUserDeletion
    ],
})