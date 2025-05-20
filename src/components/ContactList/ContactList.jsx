import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <ul>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
