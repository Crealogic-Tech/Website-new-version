import React from 'react'
import Button from '../Components/layout/Button'

function TalkToExpertSection() {
  return (
    <section className='py-16'>
        <div className='container'>
            <div className=' max-w-[800px] mx-auto'>
                <div className='excellences flex flex-col gap-5 md:flex-row justify-between items-center border border-[#c06c84] rounded-xl p-5'>
                    <h3 className='text-2xl font-semibold '>Do You Want to Turn Your Idea into Reality?</h3>
                    <Button text='Talk to our experts' className=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TalkToExpertSection