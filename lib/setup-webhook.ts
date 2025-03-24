import TelegramBot from "node-telegram-bot-api"

export async function setupWebhook(webhookUrl: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token) {
    throw new Error("TELEGRAM_BOT_TOKEN is not set")
  }

  const bot = new TelegramBot(token)

  try {
    // Delete any existing webhook
    await bot.deleteWebhook()

    // Set the new webhook
    await bot.setWebhook(webhookUrl)

    const webhookInfo = await bot.getWebhookInfo()

    return {
      success: true,
      webhookInfo,
    }
  } catch (error) {
    console.error("Failed to set webhook:", error)
    return {
      success: false,
      error,
    }
  }
}

