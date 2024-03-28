import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'
import Home from './views/Home'
import About from './views/About'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </NativeRouter>
  )
}

export default App
