import { animeCommand, nsfwAnimeCommand } from '../commands/anime.js'
import { introCommand } from '../commands/intro.js'
import { randomMusicCommand, searchMusicCommand, playMusicCommand } from '../commands/music.js'
import { stickerWaCommand, stickerUrlCommand} from '../commands/sticker.js'
import { tagAllCommand, hideTagCommand } from '../commands/group.js'

export async function handleCommand(sock: any, msg: any, command: string, args: string[]) {
  switch (command) {
    case 'anime': await animeCommand(sock, msg, args); break
    case 'nsfw': await nsfwAnimeCommand(sock, msg, args); break
    case 'menu': await introCommand(sock, msg, args); break
    case 'music': await randomMusicCommand(sock, msg); break
    case 'musicsearch': await searchMusicCommand(sock, msg, args); break
    case 'musicplay': await playMusicCommand(sock, msg, args); break
    case 'play': await playMusicCommand(sock, msg, args); break
    case 'sticker': await stickerWaCommand(sock, msg, args); break
    case 'stickerurl': await stickerUrlCommand(sock, msg, args); break
    case 'tagall': await tagAllCommand(sock, msg); break
    case 'hidetag': await hideTagCommand(sock, msg); break
  }
}