import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Globe, Server, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>VPN Bot Dashboard</CardTitle>
                <CardDescription>Manage your Telegram VPN bot</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Bot Status
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Server className="mr-2 h-4 w-4" />
                    Server Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    User Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    Connection Logs
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-3/4">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="servers">Servers</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Bot Statistics</CardTitle>
                    <CardDescription>Current status and usage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium text-primary">Active Users</p>
                        <p className="text-2xl font-bold">127</p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium text-primary">Active Connections</p>
                        <p className="text-2xl font-bold">43</p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium text-primary">Commands Today</p>
                        <p className="text-2xl font-bold">215</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest bot interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                          <div>
                            <p className="font-medium">User{i}23456</p>
                            <p className="text-sm text-gray-500">/status command</p>
                          </div>
                          <p className="text-sm text-gray-500">{i * 5} minutes ago</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="servers" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>VPN Servers</CardTitle>
                    <CardDescription>Manage your VPN server locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["United States", "Germany", "Singapore", "Japan"].map((location, i) => (
                        <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                          <div className="flex items-center">
                            <div
                              className={`h-3 w-3 rounded-full ${i % 2 === 0 ? "bg-green-500" : "bg-amber-500"} mr-3`}
                            ></div>
                            <div>
                              <p className="font-medium">{location}</p>
                              <p className="text-sm text-gray-500">
                                {i % 2 === 0 ? "Online" : "High Load"} • {10 + i * 5} users connected
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage bot users and permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["user123", "vpnuser45", "teleuser67", "newuser89"].map((user, i) => (
                        <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                          <div>
                            <p className="font-medium">{user}</p>
                            <p className="text-sm text-gray-500">
                              Joined {i + 1} {i === 0 ? "day" : "days"} ago • {(i + 1) * 250}MB used
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

