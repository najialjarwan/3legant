import { useState } from 'react';
import { Checkbox } from '@ui';
import { Eye } from '@icons';
import Button from './FormBtn.jsx';

const fields = [
    { name: 'email', type: 'email', placeholder: 'Your username or email address' },
    { name: 'password', type: 'password', placeholder: 'Password' },
];

const SignInForm = ({ }) => {

    const [agreed, setAgreed] = useState(false);

    return (
        <form
            action=""
            className="
        w-full
        flex flex-col gap-8"
        >
            {fields.map((input, index) => (
                <div
                    key={index}
                    className="
                            relative 
                            h-10 
                            body-2 text-n4100 border-b border-n3100"
                >
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        autoComplete='on'
                        className="w-full outline-0"
                    />
                    {input.type === 'password' && (
                        <Eye
                            className="
                            absolute top-0 right-0 
                            cursor-pointer"
                        />
                    )}
                </div>
            ))}

            <label
                className="
                w-full
                flex items-center gap-3 
                cursor-pointer 
                select-none"
            >
                {/* Custom visual checkbox */}
                <Checkbox
                    checked={agreed}
                    onChange={() => setAgreed(prev => !prev)}
                />

                {/* Text */}
                <p
                    className="
                w-full
                flex items-center justify-between flex-wrap"
                >
                    <span className="body-2 text-n4100">Remember me</span>
                    <span className="caption-2-semi text-n7100">Forget Password?</span>
                </p>
            </label>

            <Button variant='default'>
                Sign In
            </Button>
        </form>
    );
}

export default SignInForm;