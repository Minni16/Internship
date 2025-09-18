import { useState } from 'react'
import './index.css'
import SignUpForm from './components/SignUpForm'
import UserList from './components/UserList'

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <>
      {!showList ? (
        <SignUpForm onShowList={() => setShowList(true)} /> 
      ) : (
        <UserList />
      )}
    </>
  )
}

export default App

