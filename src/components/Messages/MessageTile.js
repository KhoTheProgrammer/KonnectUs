//This file describes how each message in a chat should look

export default function MessageTile({message}) {

  //this returns the message tile for the signed in user
  if(message.id == 'me'){
  return (
    <div  className = 'float-right items-start gap-2.5'>
    <div className=' w-full max-w-[320px] leading-1.5 p-3 border-green-500 bg-green-500  rounded-tl-xl rounded-bl-xl'>
      <div className = 'flex items-center space-x-2 rtl:space-x-reverse' >
      <span className = ' text-sm font-semibold bg-green-500 text-white'>{message.id}</span>
      <span className = ' text-sm font-normal bg-green-500 text-white'>{message.timestamp}</span>
      </div>
      <p className=" text-sm font-normal py-2.5 bg-green-500 text-white ">{message.text}</p>
    </div>
    </div>
  )
}

//this returns a tile for the person a user is communicating with
else {
  return (
    <div className = 'float-left items-start gap-2.5'>
    <div className=' w-full max-w-[320px] leading-1.5 p-3 border-gray-500 bg-gray-500  rounded-tr-xl rounded-br-xl'>
      <div className = 'flex items-center space-x-2 rtl:space-x-reverse' >
      <span className = ' text-sm font-semibold bg-gray-500 text-white'>{message.id}</span>
      <span className = ' text-sm font-normal bg-gray-500 text-white'>{message.timestamp}</span>
      </div>
      <p className=" text-sm font-normal py-2.5 bg-gray-500 text-white ">{message.text}</p>
    </div>
    </div>
  )
}
}