"use client"

import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Set the string key and the initial value
const darkModeAtom = atomWithStorage('darkMode', false)


const Page = () => {
  // Consume persisted state like any other atom
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  return (
    <>
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={toggleDarkMode}>toggle theme</button>
    </>
  )
}

export default Page