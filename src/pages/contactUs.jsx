import { ContactUsHeader, AboutUs, ContactUsDetails } from '@contact-us';
import { Values } from '@home';

const ContactUsPage = () => {
    return (
        <>
            <ContactUsHeader />

            <AboutUs />

            <ContactUsDetails />

            <Values variant="alt" />
        </>
    );
}

export default ContactUsPage;