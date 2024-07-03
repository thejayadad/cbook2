'use server'
import prisma from "./prisma"
export async function deleteContact(eventData){
    try {
        const id = eventData
        const deletecon = await prisma.contact.delete({
            where: {
                id: id
            }
        })
        return deletecon
    } catch (error) {
        console.log("Error deleting.. " + error)
    }
}