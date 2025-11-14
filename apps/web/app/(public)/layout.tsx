import './globals.css'
import Nav from '@/components/Nav'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="fr" className="dark"><body className="min-h-screen bg-[radial-gradient(1200px_700px_at_10%_-10%,#1B1A32_0%,#0B0A12_60%)] text-cosmos-text"><Nav />{children}</body></html>)}
