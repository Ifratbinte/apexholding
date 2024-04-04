import Link from 'next/link'
import React from 'react'

interface ButtonProps{
    buttonText: string
    url: string
}

const Button:React.FC<ButtonProps> = ({buttonText, url}) => {
  return (
    <Link href={url} className="rounded px-4 py-3 font-medium text-lg text-white bg-[#3ab898] hover:bg-opacity-80">
        {buttonText}
    </Link>
  )
}

export default Button