import React, { useCallback, useRef } from 'react'

import './App.css'

const CF_WORKERS_BASE_URL = 'http://127.0.0.1:8787'

const sendMessage = async (message: string) => {
  await fetch(`${CF_WORKERS_BASE_URL}/send`, {
    body: JSON.stringify({ message }),
    method: 'POST',
  })
}

const App = () => {
  const messageInputRef = useRef<HTMLInputElement>(null)
  const clickHandler = useCallback(() => {
    if (messageInputRef?.current?.value)
      sendMessage(messageInputRef.current.value)
  }, [])

  return (
    <div className="app">
      <input
        name="message"
        placeholder="Start typing..."
        ref={messageInputRef}
        type="text"
      />
      <button onClick={clickHandler}>Send</button>
    </div>
  )
}

export default App
