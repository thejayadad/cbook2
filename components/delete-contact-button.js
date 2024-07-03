'use client'
import React from 'react';
import { FiTrash } from 'react-icons/fi';
import toast, {Toaster} from 'react-hot-toast';
import { deleteContact } from '@/lib/delete-contact';

const DeleteContact = ({ contact }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await deleteContact(contact.id);
      toast.success('Contact deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Failed to delete contact');
   
    }
  };

  return (
    <div>
          <form onSubmit={handleDelete}>
      <input type="hidden" id="id" name="id" defaultValue={contact.id} />
      <button
      variant='light'
      type="submit">
        <FiTrash className="h-4 w-4" />
      </button>
    </form>

    </div>
  );
};

export default DeleteContact;