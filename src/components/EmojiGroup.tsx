import styled from 'styled-components'
import { useState } from 'react'

export const EmojiGroupUI = styled.section`
  > .header {
    color: #b2b2b2;
    font-size: 16px;
  }
  > .content {
    display: grid;
    grid-template-columns: repeat(26, 1fr);
  }
`

const EmojiUI = styled.div`
  text-align: center;
  cursor: pointer;
  position: relative;
  padding: 4px 4px 20px 4px;

  &:hover {
    background: #f5f5f5;
  }
  > .emoji {
    font-size: 20px;

    &:hover {
      transform: scale(1.6);
      transition: all 0.2s;
      display: inline-block;
      text-align: center;
    }
  }
  > .copied {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
`

export function EmojiGroup({
  groupName,
  emojis,
  copy,
}: {
  groupName: string
  emojis: { emoji: string; name: string }[]
  copy: (text: string) => void
}) {
  return (
    <EmojiGroupUI>
      <div className="header">{groupName}</div>
      <div className="content">
        {emojis.map((e, index) => (
          <Emoji key={index} emoji={e.emoji} name={e.name} copy={copy}></Emoji>
        ))}
      </div>
    </EmojiGroupUI>
  )
}

export function Emoji({
  emoji,
  name,
  copy,
}: {
  emoji: string
  name: string
  copy: (text: string) => void
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    copy(emoji)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <EmojiUI title={name} onClick={handleCopy}>
      <span className="emoji">{emoji}</span>
      {copied ? <span className="copied">copied</span> : null}
    </EmojiUI>
  )
}
