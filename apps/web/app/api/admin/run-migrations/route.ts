// apps/web/app/api/admin/run-migrations/route.ts
import { NextResponse } from 'next/server'
import { exec } from 'node:child_process';import { promisify } from 'node:util'
const run=promisify(exec)
export async function POST(req:Request){const auth=req.headers.get('authorization')||'';const bearer=auth.startsWith('Bearer ')?auth.slice(7):null;if(!bearer||bearer!==process.env.MIGRATE_TOKEN){return new NextResponse('Unauthorized',{status:401})}try{const { stdout }=await run('npx prisma migrate deploy',{ env: process.env });return NextResponse.json({ok:true,output:stdout})}catch(e:any){return new NextResponse(e?.message||'Migration failed',{status:500})}}
