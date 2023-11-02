import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import TodoList from './componenets/TodoList'

function App() {
  return (
    <body>

  {/* <!-- Navigation header --> */}
    <Header />

  {/* <!-- Main content --> */}
  <main className="main">

    <TodoList />
    {/* <!-- Section container --> */}

  </main>

  {/* <!-- Footer --> */}
  <Footer />
</body>

  )
}

export default App
