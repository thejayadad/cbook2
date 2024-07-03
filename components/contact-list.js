import React from 'react'

import { getContacts } from '@/lib/get-contacts'
import Link from 'next/link'
import DeleteContact from './delete-contact-button'


const ContactList = async ({query, currentPage}) => {
  const contacts = await getContacts(query, currentPage)
  return (
    <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-sm text-gray-700 uppercase bg-gray-50">
      <tr>
        <th className="py-3 px-6">Name</th>
        <th className="py-3 px-6">Email</th>
        <th className="py-3 px-6 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
    {contacts.map((contact, index) => (
          <tr key={contact.id} className="bg-white border-b">
            <td className="py-3 px-6">{contact.name}</td>
            <td className="py-3 px-6">{contact.email}</td>
            <td className="flex items-center justify-center gap-1 py-3">  
             
              <Link className='cursor-pointer' href={`/${contact.id}`}>Update</Link>
             <DeleteContact contact={contact}/>
            </td>
          </tr>
        ))}
    </tbody>
    </table>
  )
}

export default ContactList