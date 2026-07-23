import { InputsContainer, Input } from '@ui';

const ContactInformation = () => {
    return (
        <InputsContainer header="contact information">
            <div className='flex gap-6'>
                <Input type="text" placeholder="first name" />
                <Input type="text" placeholder="last name" />
            </div>
            <Input type="text" placeholder="phone number" />
            <Input type="email" placeholder="email address" />
        </InputsContainer>
    );
}

export default ContactInformation;