/**
 * v0 by Vercel.
 * @see https://v0.dev/t/osYWo6e7drZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { User } from "lucide-react"
import kirano from '@/lib/assets/shark from my town.png'

export default function Component() {
  return (
    <div className="flex h-screen max-h-screen flex-col rounded-lg border bg-zinc-900">
      <header className="flex items-center gap-4 border-b px-4 py-3 dark:border-gray-800">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8" size="icon" variant="ghost">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOutIcon className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Avatar className="h-8 w-8">
          <AvatarImage alt="Chat Partner" src="/placeholder-avatar.jpg" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-medium">Chat with John Doe</div>
          <div className="text-sm text-green-400">Online</div>
        </div>
        <Button className="h-8 w-8" size="icon" variant="ghost">
          <User className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </header>
      <div className="flex h-full">
        <div className="border-r px-4 py-6 dark:border-gray-800">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="User 1" src="/placeholder-avatar.jpg" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-green-400">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="User 2" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Offline</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="User 3" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Michael Johnson</div>
                <div className="text-sm text-green-400">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="User 4" src="/placeholder-avatar.jpg" />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Emily Davis</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Offline</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Chat Partner" src="/placeholder-avatar.jpg" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div className="flex max-w-[75%] flex-col gap-1.5">
                <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                  <p>Hey there! How's it going?</p>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</div>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="You" src={kirano.src} />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div className="flex max-w-[75%] flex-col gap-1.5">
                <div className="rounded-lg bg-gray-900 p-3 text-sm text-white dark:bg-gray-50 dark:text-gray-900">
                  <p>I'm doing great, thanks for asking!</p>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">10:31 AM</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Chat Partner" src="/placeholder-avatar.jpg" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div className="flex max-w-[75%] flex-col gap-1.5">
                <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                  <p>That's great to hear! Do you have any plans for the weekend?</p>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">10:32 AM</div>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="You" src={kirano.src}/>
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div className="flex max-w-[75%] flex-col gap-1.5">
                <div className="rounded-lg bg-gray-900 p-3 text-sm text-white dark:bg-gray-50 dark:text-gray-900">
                  <p>I'm planning to go hiking with some friends. It should be a lot of fun!</p>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">10:33 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t px-4 py-3 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Input className="flex-1 bg-transparent" placeholder="Type your message..." type="text" />
          <Button className="h-8 w-8" size="icon" variant="ghost">
            <SendIcon className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function LogOutIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}