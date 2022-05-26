import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='max-w-lg w-full text-center mx-auto pt-32 pb-10 '>
        <h1 className="text-2xl sm:text-4xl"> Interested in Working Together ?</h1>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhdXKNZpDJNLsFMZgzmnhzPjjzsLmNbcZWTQzZFFrRfBVcFWxddTqHJnkVzZlrshsNrhL">
            <span className="sm:mt-16 mt-10 text-white bg-black inline-block w-auto font-display text-base cursor-pointer py-4 px-7 md:text-xl rounded-2xl">
                <div className="flex flex-row items-center">
                    <span className="mr-3 "> Get in touch</span>
                    <FaArrowRight />
                </div>
                
            </span>
        </a>

    </div>
  )
}

export default Contact