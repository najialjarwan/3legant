const SidebarFilterSection = ({ title, children }) => {
    return (
        <section className="flex flex-col gap-4">
            <header className='text-black-900 body-2-semi uppercase'>
                {title}
            </header>

            {children}
        </section>
    );
}

export default SidebarFilterSection;