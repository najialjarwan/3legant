import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@contexts';
import { FormField, AuthFormSubmitBtn } from '@auth';
import { Checkbox } from '@ui';

const SIGN_UP_FIELDS = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Your Name',
    },
    {
        name: 'username',
        type: 'text',
        placeholder: 'Username',
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Email Address',
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
    },
];

const SignUpForm = () => {
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!acceptedTerms) {
            return;
        }

        try {
            const user = await signUp(formData);
            console.log('Account created:', user);
            navigate('/');
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8"
        >
            {SIGN_UP_FIELDS.map((input) => (
                <FormField
                    key={input.name}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={formData[input.name]}
                    onChange={handleChange}
                    className="w-full h-10 body-2 text-n4100 border-b border-n3100 outline-0"
                />
            ))}

            <label className="flex items-center gap-3 cursor-pointer select-none">
                <Checkbox
                    checked={acceptedTerms}
                    onChange={() => setAcceptedTerms(prev => !prev)}
                />

                <p className="flex items-center flex-wrap gap-x-1">
                    <span className="caption-2 text-n4100">I agree with</span>
                    <span className="caption-2-semi text-n7100">Privacy Policy</span>
                    <span className="caption-2 text-n4100">and</span>
                    <span className="caption-2-semi text-n7100">Terms of Use</span>
                </p>
            </label>

            <AuthFormSubmitBtn>
                sign up
            </AuthFormSubmitBtn>
        </form>
    );
}

export default SignUpForm;