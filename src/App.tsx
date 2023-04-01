import './App.css'

import copy from 'copy-to-clipboard'
import { EmojiGroup } from './components/EmojiGroup'
import { faceSmiling } from './data/smileys-emotions'

const emojiGroups: {
  groupName: string
  emojis: { emoji: string; name: string }[]
}[] = [
  {
    groupName: 'Face Smiling',
    emojis: getEmojis(faceSmiling),
  },
]

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
  return groupStr.split(/\n/g).map((line) => {
    const estr = line.split(/[;#]/)[2].trim()
    const res = /([^\s]+)\s([^\s]+)\s(.*)/.exec(estr) as any
    return { emoji: res[1], name: res[3] }
  })
}
