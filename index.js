import { Telegraf } from 'telegraf'
import dotenv from 'dotenv'
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('channel_post', ctx => {
    try {
        if (!ctx.update.channel_post.audio || !ctx.update.channel_post.caption) return
        ctx.telegram.editMessageCaption(ctx.update.channel_post.chat.id, ctx.update.channel_post.message_id, '')
    } catch (e) {
        console.error(e)
    }
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))