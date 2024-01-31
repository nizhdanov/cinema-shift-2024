import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
  // const { device } = userAgent(request);
  // if (device.type === 'mobile') {
  //   return NextResponse.redirect('/mobile');
  // }
  // if (device.type !== 'mobile') {
  //   return NextResponse.redirect('/');
  // }
}
