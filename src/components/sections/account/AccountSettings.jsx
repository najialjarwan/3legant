import { Input } from '@ui';

const AccountSettings = () => {
    return (
        <div className='w-full 2xl:pr-[72px] flex flex-col gap-10'>
            <InputsContainer headerTitle="account details">
                <Input
                    required
                    placeholder="first name"
                    type="text" />
                <Input
                    required
                    placeholder="last name"
                    type="text"
                />
                <Input
                    required
                    placeholder="display name"
                    type="text"
                    caption="This will be how your name will be displayed in the account section and in reviews"
                />
                <Input
                    required
                    placeholder="email"
                    type="email"
                />
            </InputsContainer>

            <InputsContainer headerTitle="password">
                <Input placeholder="old password" type="password" />
                <Input placeholder="new password" type="password" />
                <Input placeholder="repeat new password" type="password" />
            </InputsContainer>

            <SaveChangesBtn />
        </div>
    );
}

export default AccountSettings;

const InputsContainer = ({ headerTitle, children }) => (
    <div className='flex flex-col gap-6'>
        <header className='text-black body-1-semi capitalize'>{headerTitle}</header>
        {children}
    </div>
);

const SaveChangesBtn = () => (
    <button
        className='
        w-fit px-10 py-3
        text-white btn-s capitalize
        bg-n7100 border border-transparent rounded-lg
        hover:text-n7100 hover:bg-transparent hover:border-n7100
        transition-all duration-150 ease-linear
        '
    >
        save changes
    </button>
);