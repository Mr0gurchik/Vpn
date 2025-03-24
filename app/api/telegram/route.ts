import { type NextRequest, NextResponse } from "next/server"
import TelegramBot from "node-telegram-bot-api"

// Initialize bot with token from environment variables
const token = process.env.TELEGRAM_BOT_TOKEN

export async function POST(request: NextRequest) {
  try {
    if (!token) {
      console.error("TELEGRAM_BOT_TOKEN not configured")
      return NextResponse.json({ error: "Telegram bot token not configured" }, { status: 500 })
    }

    const bot = new TelegramBot(token)
    const update = await request.json()

    // Handle incoming message
    if (update.message) {
      const chatId = update.message.chat.id
      const text = update.message.text || ""

      // Handle commands
      if (text.startsWith("/")) {
        const command = text.split(" ")[0].toLowerCase()

        switch (command) {
          case "/start":
            await bot.sendMessage(
              chatId,
              "Добро пожаловать в VPN Bot! 🚀\n\nЯ могу помочь вам управлять вашими VPN-подключениями. Используйте /help, чтобы увидеть доступные команды.",
            )
            break

          case "/status":
            await bot.sendMessage(
              chatId,
              "✅ Статус VPN-сервиса: Онлайн\n\nВсе системы работают. Вы можете подключиться к любому из наших серверов.",
            )
            break

          case "/servers":
            await bot.sendMessage(
              chatId,
              "🌎 Доступные VPN-серверы:\n\n" +
                "🇺🇸 США (Нью-Йорк) - загрузка 85%\n" +
                "🇩🇪 Германия (Франкфурт) - загрузка 62%\n" +
                "🇸🇬 Сингапур - загрузка 45%\n" +
                "🇯🇵 Япония (Токио) - загрузка 38%\n\n" +
                "Используйте /connect для получения инструкций по подключению.",
            )
            break

          case "/connect":
            await bot.sendMessage(
              chatId,
              "📱 Инструкции по подключению:\n\n" +
                "1. Откройте ваше VPN-приложение\n" +
                "2. Добавьте новое подключение с этими данными:\n" +
                "   - Протокол: OpenVPN\n" +
                "   - Сервер: vpn.example.com\n" +
                "   - Порт: 1194\n" +
                "   - Имя пользователя: Ваш зарегистрированный email\n" +
                "   - Пароль: Пароль вашей учетной записи\n\n" +
                "Нужна помощь? Свяжитесь с поддержкой с помощью /help",
            )
            break

          case "/usage":
            await bot.sendMessage(
              chatId,
              "📊 Ваше использование VPN:\n\n" +
                "Использовано данных в этом месяце: 2.7 ГБ / 50 ГБ\n" +
                "Активные подключения: 1/3\n" +
                "Статус аккаунта: Активен\n" +
                "Дата продления: 24 апреля 2025",
            )
            break

          case "/help":
          default:
            await bot.sendMessage(
              chatId,
              "🔐 Команды VPN-бота:\n\n" +
                "/start - Приветственное сообщение\n" +
                "/status - Проверка статуса VPN-сервиса\n" +
                "/servers - Список доступных VPN-серверов\n" +
                "/connect - Получение инструкций по подключению\n" +
                "/usage - Просмотр использования данных\n" +
                "/help - Показать это сообщение помощи",
            )
            break
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error handling Telegram webhook:", error)
    return NextResponse.json({ error: "Failed to process Telegram update" }, { status: 500 })
  }
}

// Add a GET handler for testing
export async function GET() {
  return NextResponse.json({ status: "Telegram webhook endpoint is working" })
}

