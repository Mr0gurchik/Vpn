import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">VPN Telegram Bot</h1>
          <p className="text-gray-500 mt-2">Manage your VPN connections through Telegram</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bot Status</CardTitle>
            <CardDescription>Your Telegram VPN bot is running</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div>
                <p className="font-medium">Online</p>
                <p className="text-sm text-gray-500">Bot is active and responding to commands</p>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-medium mb-2">Available Commands</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <code>/start</code> - Welcome message and instructions
                </li>
                <li>
                  <code>/status</code> - Check VPN connection status
                </li>
                <li>
                  <code>/servers</code> - List available VPN servers
                </li>
                <li>
                  <code>/connect</code> - Get connection instructions
                </li>
                <li>
                  <code>/usage</code> - View your data usage
                </li>
                <li>
                  <code>/help</code> - Show available commands
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">Open Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-gray-500">
          <p>Connect with your VPN service through our Telegram bot</p>
          <p className="mt-1">
            <Link href="https://t.me/your_bot_username" className="text-primary hover:underline">
              @your_vpn_bot
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

