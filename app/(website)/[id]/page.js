import ContactForm from '@/components/contact-form'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const SingleContact = async ({params}) => {
    const id = params.id
    const contact = await prisma.contact.findUnique({
        where: {
            id: id
        }
    })
    if(!contact){
        redirect("/")
    }
  return (
    <div>
        <div className='mx-auto max-w-screen-md'>
            <ContactForm contact={contact} />
        </div>
    </div>
  )
}

export default SingleContact