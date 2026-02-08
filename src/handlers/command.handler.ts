import { animeCommand, nsfwAnimeCommand} from '../commands/anime.js'
import { introCommand } from '../commands/intro.js'

export async function handleCommand(
  sock: any,
  msg: any,
  command: string,
  args: string[]
) {
  switch (command) {
    case 'anime':
      await animeCommand(sock, msg, args)
      break
  }
  switch (command) {
    case 'menu':
      await introCommand(sock, msg, args)
      break
  }
  switch (command) {
    case 'nsfw':
      await nsfwAnimeCommand (sock, msg, args)
      break
  }
}