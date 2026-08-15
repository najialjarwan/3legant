import { useSearchParams } from 'react-router-dom';
import { Container } from '@layout';
import { Brand } from '@ui';
import { SignUpForm, SignInForm } from '@auth';

const AuthPopup = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const mode = searchParams.get('mode') || 'signup';
    const isSignup = mode === 'signup';

    const toggleMode = () => {
        setSearchParams({
            mode: isSignup ? 'signin' : 'signup',
        });
    };

    return (
        <Container className="2xl:flex 2xl:gap-22">
            {/* Image & Brand */}
            <div
                className="
                relative
                w-full 2xl:w-[50%]
                h-[430px] 2xl:h-screen
                flex items-start justify-center
                bg-n2100
                "
            >
                <Brand className="absolute left-1/2 -translate-x-1/2 top-8" />

                <img
                    src="/images/products/polished-sofa/polished sofa.png"
                    alt=""
                    className="size-full 2xl:h-auto max-h-[1080px] object-contain"
                />
            </div>

            {/* Form & Actions */}
            <div
                className="
                w-[311px] 2xl:w-[456px]
                mx-auto 2xl:mx-0
                2xl:mt-55
                py-10 2xl:py-0
                flex flex-col gap-8"
            >
                {/* Sign Up / Sign In Navigation */}
                <div className="flex flex-col gap-6">
                    <header className="h4 text-n7100">
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </header>

                    <p className="body-2 text-n7100">
                        {isSignup ? 'Already have an account? ' : "Don't have an account? "}

                        <button
                            type="button"
                            onClick={toggleMode}
                            className="body-2-semi text-green cursor-pointerml-1"
                        >
                            {isSignup ? 'Sign in' : 'Sign up'}
                        </button>
                    </p>
                </div>

                {/* Sign Up / Sign In Form */}
                {isSignup ? (<SignUpForm />) : (<SignInForm />)}
            </div>
        </Container>
    );
};

export default AuthPopup;