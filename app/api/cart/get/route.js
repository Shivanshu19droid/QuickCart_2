import connectDB from '@/config/db'
import { getAuth } from '@clerk/nextjs/server'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET(request) {
    try {
        const { userid } = getAuth(request)

        await connectDB()
        
        const user = await User.findById(userid)
        const { cartitems } =  user
        return NextResponse.json({ success: true, cartItems })

    
} catch (error) {
        return NextResponse.json({ success: false, message: error.message })
        
    }
}
