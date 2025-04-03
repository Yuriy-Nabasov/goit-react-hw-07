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
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

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
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <Error>Error message</Error>}
        {contacts.length > 0 && <ContactList />}
        {/* <Analytics /> */}
      </Container>
    </Section>
  );
}
