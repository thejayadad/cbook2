'use server'
import prisma from "./prisma";

const ITEMS_PER_PAGE = 5;

export const getContacts = async (query, currentPage) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const contacts = await prisma.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw new Error("Failed to fetch contact data");
  }
};

export const getContactPages = async (query) => {
  try {
    const contactsCount = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contactsCount) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Error counting contacts:", error);
    throw new Error("Failed to fetch contact data");
  }
};