import {getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request){
try {
    const { userid } =  getAuth(request)
    const { cartData } = await request.json()
    await connectDB()
    const user = await User.findById(userid)
     user.cartitems = cartData
     user.save()

     NextResponse.json({ success: true, message: 'cart updated' })
} catch (error) {
    return NextResponse.json({ success: false, message: error.message })
    
}
}
