//This file describes how each message in a chat should look

export default function MessageTile({ message }) {
  //this returns the message tile for the signed in user
  if (message.id === "me") {
    return (
      <div>
        <div className="flex flex-row justify-end">
          <div className="float-right items-start gap-2.5">
            <div className=" w-full max-w-[320px] leading-1.5 p-3 border-green-500 bg-green-500 pl-10 rounded-l-[40px]">
              <div className="flex items-center space-x-2 rtl:space-x-reverse justify-end">
                <span className=" text-sm font-normal bg-green-500 text-white">
                  {message.timestamp}
                </span>
                <span className=" text-sm font-semibold bg-green-500 text-white">
                  {message.id}
                </span>
              </div>
              <p className=" text-sm font-normal py-2.5 bg-green-500 text-white ">
                {message.text}
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[40px] h-[40px] ml-2"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <br></br>
      </div>
    );
  }

  //this returns a tile for the person a user is communicating with
  else {
    return (
      <div>
        <div className="flex flex-row justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[40px] h-[40px] mr-2"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="float-left items-start gap-2.5">
            <div className=" w-full max-w-[320px] leading-1.5 p-3 border-gray-500 bg-gray-500 pr-10  rounded-r-[40px]">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className=" text-sm font-semibold bg-gray-500 text-white">
                  {message.id}
                </span>
                <span className=" text-sm font-normal bg-gray-500 text-white">
                  {message.timestamp}
                </span>
              </div>
              <p className=" text-sm font-normal py-2.5 bg-gray-500 text-white ">
                {message.text}
              </p>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}
