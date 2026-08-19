import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@contexts';
import { FormField, AuthFormSubmitBtn } from '@auth';
import { Checkbox } from '@ui';

const SIGN_IN_FIELDS = [
    {
        name: 'identifier',
        type: 'text',
        placeholder: 'Your username or email address',
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
    },
];

const SignInForm = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        identifier: '',
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

        try {
            const user = await signIn(formData, rememberMe);
            console.log('Signed in:', user);
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
            {SIGN_IN_FIELDS.map((input) => (
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

            <label className="w-full flex items-center gap-3 cursor-pointer select-none">
                <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(prev => !prev)}
                />

                <p className="w-full flex items-center justify-between flex-wrap">
                    <span className="body-2 text-n4100">Remember me</span>
                    <span className="caption-2-semi text-n7100">Forget Password?</span>
                </p>
            </label>

            <AuthFormSubmitBtn>
                sign in
            </AuthFormSubmitBtn>
        </form>
    );
}

export default SignInForm;