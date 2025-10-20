import './App.css'

//import { ObjectLiterals } from './typescript/ObjectLiterals'
//import { BasicFunctions } from './typescript/BasicFunctions'
//import { BasicTypes } from './typescript/BasicTypes'
import reactLogo from './assets/react.svg'
import { Counter } from './components/Counter'
import { Login } from './components/Login'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
  <AuthProvider>
    <div className='flex flex-col justify-center items-center h-svh'> 
      <a href='https://es.react.dev/' target='_blank'>
        <img src={reactLogo} className='w-40 h-40' alt='React logo'/>
      </a>
      <h1 className='text-4xl mb-5'> React  +  Typescript</h1>
      <Counter />
      <Login />
    </div>
  </AuthProvider>
  )
}

export default App
