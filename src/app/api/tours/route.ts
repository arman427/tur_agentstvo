// import { prisma } from '@/lib/prisma';
// import { NextResponse } from 'next/server';

// export async function GET() {
//    try {
//       const data = await prisma.tour.findMany({
//          orderBy: { id: 'asc' },
//       });
//       return NextResponse.json(data);
//    } catch (error) {
//       console.error('Failed to fetch tours:', error);
//       return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//    }
// }