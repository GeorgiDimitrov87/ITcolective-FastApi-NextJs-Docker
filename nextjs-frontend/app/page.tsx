// app/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Welcome to <span className="text-primary">Next.js</span> + <span className="text-primary">FastAPI</span>
        </h1>
        
        {/* Link to Dashboard - Updated Link component */}
        <div>
          <Link 
            href="/dashboard" 
            passHref
            className="inline-block"
            legacyBehavior
          >
            <Button className="px-8 py-4 text-xl font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 focus:ring-4 focus:ring-blue-300">
              Go to Dashboard
            </Button>
          </Link>
        </div>

        <div className="mt-6">
          <div className="border font-mono text-sm px-4 py-2 rounded-md bg-muted/50">
            <p>Get started by editing{' '}
              <Link 
                href="https://github.com/vintasoftware/nextjs-fastapi-template" 
                target="_blank" 
                className="hover:underline"
              >
                View on GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}