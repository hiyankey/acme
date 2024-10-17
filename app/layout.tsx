import '@/app/styles/global.css'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import { DropdownPropvider } from './ctx/dropdown'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <DropdownPropvider> {children}</DropdownPropvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
