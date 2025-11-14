// apps/web/app/api/admin/seed/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { hash } from '@node-rs/argon2'
const prisma=new PrismaClient()
export async function GET(req:Request){const url=new URL(req.url);const token=url.searchParams.get('token');if(!token||token!==process.env.SEED_TOKEN){return new NextResponse('Unauthorized',{status:401})}const email=process.env.ADMIN_EMAIL||'admin@calao.com';const password=process.env.ADMIN_PASSWORD||'ChangeMoi!2025';const passwordHash=await hash(password);await prisma.user.upsert({where:{email},update:{roleId:2,isEmailVerified:true},create:{email,passwordHash,roleId:2,isEmailVerified:true}});return NextResponse.json({ok:true,email})}
