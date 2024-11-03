import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenSquare, faXmark } from '@fortawesome/free-solid-svg-icons'

const List = () => {
const value = "123";

  return (
    <div className='flex h-full lg:w-1/2 justify-self-center w-full bg-gray-500 border-[5px] p-5 text-white flex-col'>
        <div className='flex flex-row h-10 w-full'>
            <input type="text" placeholder='Type your task' className='w-3/4 rounded-l-md p-3 text-black text-lg outline-none'/>
            <button className='w-1/4 bg-slate-800 rounded-r-md hover:bg-slate-900'>Confirm</button>
        </div>
        <ul className='bg-slate-600 h-full p-2 rounded-md flex flex-col gap-5 text-lg'>
            <li className='bg-slate-700 rounded-md flex flex-row justify-between gap-5 h-12 items-center px-2'>
            <p className='overflow-hidden'>{value}</p>
            <div className='flex flex-row gap-2'>
                <button
                className='bg-slate-800 rounded-sm hover:bg-slate-900 p-1 w-10'>
                  <FontAwesomeIcon icon={faCheck}/>
                </button>
                <button className='bg-slate-800 rounded-sm hover:bg-slate-900 p-1 w-10' >
                  <FontAwesomeIcon icon={faPenSquare}/>
                </button>
                <button className='bg-slate-800 rounded-sm hover:bg-slate-900 p-1 w-10'>
                  <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
            </li>
        </ul>
    </div>
  )
}

export default List