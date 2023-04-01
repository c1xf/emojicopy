import './App.css'

import copy from 'copy-to-clipboard'
import { EmojiGroup } from './components/EmojiGroup'

import * as smileysEmotions from './data/smileys-emotions'
import * as peopleBody from './data/people-body'
import * as animalsNatures from './data/animals-nature'
import * as foodDrink from './data/food-drink'
import * as travelPlaces from './data/travel-places'
import * as activities from './data/activities'
import * as objects from './data/objects'
import * as symbols from './data/symbols'
import * as flags from './data/flags'

console.log(symbols)

const emojiGroups: {
  groupName: string
  emojis: { emoji: string; name: string }[]
}[] = getEmojiGroups(smileysEmotions)
  .concat(getEmojiGroups(peopleBody))
  .concat(getEmojiGroups(animalsNatures))
  .concat(getEmojiGroups(foodDrink))
  .concat(getEmojiGroups(travelPlaces))
  .concat(getEmojiGroups(activities))
  .concat(getEmojiGroups(objects))
  .concat(getEmojiGroups(symbols))
  .concat(getEmojiGroups(flags))

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
      const estr = line.split(/[;#]\s/)[2].trim()
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
