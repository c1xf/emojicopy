import './App.css'

import faceSmiling from './data/smileys-emotions/face-smiling'
import copy from 'copy-to-clipboard'

const emoji = faceSmiling.split(/\n/g).map((line) => {
  const estr = line.split(/[;#]/)[2].trim()
  const res = /([^\s]+)\s([^\s]+)\s(.*)/.exec(estr) as any
  return [res[1], res[3]]
})
console.log(emoji)

function App() {
  const handleCopy = (text: string) => () => {
    copy(text)
  }
  return (
    <div className="App">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ',
        }}
      >
        {emoji.map((e, index) => (
          <div key={index} onClick={handleCopy(e[0])}>
            <div style={{ fontSize: '36px' }}>{e[0]}</div>
            {e[1]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
