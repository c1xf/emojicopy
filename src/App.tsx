import './App.css'

import copy from 'copy-to-clipboard'
import { EmojiGroup } from './components/EmojiGroup'

import * as smileysEmotions from './data/smileys-emotions'
import * as peopleBody from './data/people-body'

console.log(Object.keys(smileysEmotions))

const emojiGroups: {
  groupName: string
  emojis: { emoji: string; name: string }[]
}[] = getEmojiGroups(smileysEmotions).concat(getEmojiGroups(peopleBody))

function App() {
  return (
    <div className="App">
      {emojiGroups.map((eg, index) => (
        <EmojiGroup
          key={index}
          groupName={eg.groupName}
          emojis={eg.emojis}
          copy={copy}
        />
      ))}
    </div>
  )
}

export default App

function getEmojis(groupStr: string) {
  return groupStr
    .trim()
    .split(/\n/g)
    .map((line) => {
      const estr = line.split(/[;#]/)[2].trim()
      const res = /([^\s]+)\s([^\s]+)\s(.*)/.exec(estr) as any
      return { emoji: res[1], name: res[3] }
    })
}

function getEmojiGroups(groups: any) {
  return Object.keys(groups).map((k) => ({
    groupName: k,
    emojis: getEmojis(groups[k]),
  }))
}
