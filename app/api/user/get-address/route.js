export async function GET(request) {
    try {
        const { userid } = getAuth(request)

        await connectDB()
        
        const addresses = await Address.find({ user: userid })
        
        return NextResponse.json({ success: true, addresses });
    } catch (error) {
        
        return NextResponse.json({ success: false, message: error.message })
    }
}


