import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ChevronDown, Info } from "lucide-react"

export default function UsageDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col">
        {/* Header */}
        <header className="border-b">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold tracking-tight">Usage</h1>
              <div className="flex gap-3">
                <Button variant="outline">View Plan</Button>
                <Button variant="outline">View Invoices</Button>
                <Button variant="outline">Manage Notifications</Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 border-r min-h-[calc(100vh-73px)] p-4">
            <nav className="space-y-2">
              <div className="font-medium">Overview</div>
              <div className="flex items-center justify-between font-medium text-muted-foreground">
                Networking
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 space-y-2 text-sm text-muted-foreground">
                <div>Fast Data Transfer</div>
                <div>Fast Origin Transfer</div>
                <div>Edge Requests</div>
                <div>Edge Request CPU Duration</div>
              </div>
            </nav>
          </aside>

          {/* Main Area */}
          <main className="flex-1 p-6">
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex gap-4">
                <Select defaultValue="current">
                  <SelectTrigger className="w-[200px]">
                    <Calendar className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select billing cycle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current Billing Cycle</SelectItem>
                    <SelectItem value="previous">Previous Billing Cycle</SelectItem>
                  </SelectContent>
                </Select>

                <div className="text-sm text-muted-foreground flex items-center border rounded-md px-3">
                  Feb 1, 8:00 - Feb 15, 8:00
                </div>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Projects</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Overview Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Overview</h2>
                <Card>
                  <div className="p-6">
                    <table className="w-full">
                      <thead>
                        <tr className="text-sm text-muted-foreground">
                          <th className="text-left font-medium">Product</th>
                          <th className="text-left font-medium">Included</th>
                          <th className="text-left font-medium">On-demand</th>
                          <th className="text-right font-medium">Charge</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b">
                          <td className="py-4">Edge Requests</td>
                          <td>550 / 5M</td>
                          <td>-</td>
                          <td className="text-right">$0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4">Fast Data Transfer</td>
                          <td>5.68 MB / 500 GB</td>
                          <td>-</td>
                          <td className="text-right">$0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4">Edge Request CPU Duration</td>
                          <td>0 s / 1 h</td>
                          <td>-</td>
                          <td className="text-right">$0</td>
                        </tr>
                        <tr>
                          <td className="py-4">Fast Origin Transfer</td>
                          <td>0 B / 50 GB</td>
                          <td>-</td>
                          <td className="text-right">$0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              {/* Networking Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Networking</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <p>
                    Top paths have moved to <span className="font-medium text-foreground">Observability</span> inside
                    each project.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

