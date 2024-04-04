import React from 'react'
interface Props{
    icon:string
    info: string
}


const IconText:React.FC<Props> = ({icon, info}) => {
  return (
    <li className='flex items-center gap-2'>
        {icon}
        <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
        >
            {info}
        </a>
    </li>
  )
}

export default IconText