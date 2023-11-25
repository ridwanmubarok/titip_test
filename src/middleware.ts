import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async  function middleware(request: NextRequest) {
    const check = request.cookies.get('isLoggedIn')
    if(check?.value != 'true'){
        return NextResponse.redirect(new URL('/',request.url))
    }
}

export const config = {
    matcher: '/monitoring',
}