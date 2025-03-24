import { type NextRequest, NextResponse } from "next/server"
import { setupWebhook } from "@/lib/setup-webhook"

export async function POST(request: NextRequest) {
  try {
    const { webhookUrl } = await request.json()

    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook URL is required" }, { status: 400 })
    }

    const result = await setupWebhook(webhookUrl)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Webhook set successfully",
        webhookInfo: result.webhookInfo,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to set webhook",
          details: result.error,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error setting up webhook:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

