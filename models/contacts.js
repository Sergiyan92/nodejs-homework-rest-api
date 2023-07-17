const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./", "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};
const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    return contacts.find((contact) => contact.id === contactId) || null;
  } catch (error) {
    throw error;
  }
};
const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const removeContact = contacts.find((contact) => contact.id === contactId);
    if (!removeContact) return null;
    const updateContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2));
    return removeContact;
  } catch (error) {
    throw error;
  }
};
const addContact = async (data) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), ...data };
    const updateContacts = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2));
    return newContact;
  } catch (error) {
    throw error;
  }
};

const updateContact = async (id, data) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((el) => el.id === id);
    if (index === -1) {
      return null;
    }
    contacts[index] = { id, ...data };
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
