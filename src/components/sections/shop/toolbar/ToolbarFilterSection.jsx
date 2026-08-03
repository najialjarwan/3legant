export const ToolbarFilterSection = ({ title, children }) => {
    return (
        <section className='flex flex-col gap-2'>
            <header className='text-n4100 body-2-semi uppercase'>
                {title}
            </header>

            {children}
        </section>
    );
};

export default ToolbarFilterSection;