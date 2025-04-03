import { useDispatch, useSelector } from "react-redux";

// import { Analytics } from "@vercel/analytics/react";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Notification from "../Notification/Notification";

import "./App.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Heading
          title="Phonebook release with Redux and  mockapi.io"
          bottom
          tag={`h1`}
        />
        <ContactForm />
        <SearchBox />
        <div>{contacts.length === 0 && <Notification />}</div>
        {contacts.length > 0 && <ContactList />}
        {/* <Analytics /> */}
      </Container>
    </Section>
  );
}
