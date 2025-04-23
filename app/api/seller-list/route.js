import { getAuth } from '@clerk/nextjs/server';
import authSeller from '@/lib/authSeller';
import { NextResponse } from 'next/server';
export async function GET(request) {
    try{
        const { userid } = getAuth(request);
        const isSeller = authSeller(userid)

        if (!isSeller){
            return NextResponse.json({ success: false, message: 'not authorized'});
        }
        await connectDB()
        const products = await Product.find({})
        return NextResponse.json({ success: true, products })
    }catch(error){
        return NextResponse.json({ success: false, message: error.message })

    }
}
