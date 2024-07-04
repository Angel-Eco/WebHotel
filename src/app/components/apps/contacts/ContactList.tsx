import { useEffect, useMemo } from "react";
import List from '@mui/material/List';
import { useSelector, useDispatch } from "@/store/hooks";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/contacts/ContactSlice";
import Scrollbar from "../../../components/custom-scroll/Scrollbar";
import ContactListItem from "./ContactListItem";
import type { ContactType } from '../../../(DashboardLayout)/types/apps/contact';

type Props = {
  showrightSidebar: () => void;
};

const getVisibleContacts = (
  contacts: ContactType[],
  filter: string,
  contactSearch: string
) => {
  const lowercaseSearch = contactSearch.toLocaleLowerCase();
  switch (filter) {
    case "show_all":
      return contacts.filter(
        (c) =>
          !c.deleted &&
          c.firstname.toLocaleLowerCase().includes(lowercaseSearch)
      );

    case "frequent_contact":
      return contacts.filter(
        (c) =>
          !c.deleted &&
          c.frequentlycontacted &&
          c.firstname.toLocaleLowerCase().includes(lowercaseSearch)
      );

    case "starred_contact":
      return contacts.filter(
        (c) =>
          !c.deleted &&
          c.starred &&
          c.firstname.toLocaleLowerCase().includes(lowercaseSearch)
      );

    case "engineering_department":
      return contacts.filter(
        (c) =>
          !c.deleted &&
          c.department === "Engineering" &&
          c.firstname.toLocaleLowerCase().includes(lowercaseSearch)
      );

    case "support_department":
      return contacts.filter(
        (c) =>
          !c.deleted &&
          c.department === "Support" &&
          c.firstname.toLocaleLowerCase().includes(lowercaseSearch)
      );

    case "sales_department":
      return contacts.filter(
        (c) =>
          !c.deleted &&
          c.department === "Sales" &&
          c.firstname.toLocaleLowerCase().includes(lowercaseSearch)
      );

    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const ContactList = ({ showrightSidebar }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const filter = useSelector((state) => state.contactsReducer.currentFilter);
  const contactSearch = useSelector((state) => state.contactsReducer.contactSearch);
  const active = useSelector((state) => state.contactsReducer.contactContent);

  const visibleContacts = useMemo(() => {
    return getVisibleContacts(contacts, filter, contactSearch);
  }, [contacts, filter, contactSearch]);

  return (
    <Scrollbar
      sx={{
        height: { lg: "calc(100vh - 100px)", md: "100vh" },
        maxHeight: "800px",
      }}
    >
      <List>
        {visibleContacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            active={contact.id === active}
            {...contact}
            onContactClick={() => {
              dispatch(SelectContact(contact.id));
              showrightSidebar();
            }}
            onDeleteClick={() => {
              dispatch(DeleteContact(contact.id));
            }}
            onStarredClick={() => dispatch(toggleStarredContact(contact.id))}
          />
        ))}
      </List>
    </Scrollbar>
  );
};

export default ContactList;