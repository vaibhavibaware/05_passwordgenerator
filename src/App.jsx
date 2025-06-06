import { useState, useCallback,useEffect,useRef} from 'react'

function App() {
  const [lengtht, setLength] = useState(8)
  const [Numberallowed, setNumberallowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const refhook=useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (Numberallowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= lengtht; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [lengtht, Numberallowed, charAllowed,setPassword])

  const copyPasswordtoClipBoard=useCallback(()=>{
    refhook.current?.select();
    refhook.current?.setSelectionRange(0,lengtht)
    window.navigator.clipboard.writeText(Password)
  },[Password])
 useEffect(()=>{
  PasswordGenerator()
 }, [lengtht, Numberallowed, charAllowed,PasswordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
      px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        
        <h1 className='text-white text-center my-3'> Password generator</h1>
       
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
        <input type='text' value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={refhook}
        />

        <button onClick={
          copyPasswordtoClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>

       <div className='flex text-sm gap-x-2 items-center'>
        <input
        type='range'
        min={6}
        max={100}
        value={lengtht}
        className='cursor-pointer'
        onChange={(e)=>setLength(Number(e.target.value))}
        />
        <label>Length: {lengtht}</label>

        <input
        type='checkbox'
        checked={Numberallowed}
        id='numberInput'
        onChange={()=>{setNumberallowed((prev) =>!prev)}}
        />
        <label htmlFor='numberInput'>Numbers</label>

        <input
        type='checkbox'
        checked={charAllowed}
        id='charInput'
        onChange={()=> {setCharAllowed((prev) =>!prev)}}
        />
        <label htmlFor='charInput'>Character</label>
       </div>
      </div>
    </>
  )
}

