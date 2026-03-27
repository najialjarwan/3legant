const Section = ({ padding = 'default', className = '', children, divider = false }) => (
    
    <div
        className={`
        flex flex-col
        ${padding === 'default' ? 'gap-6' : 'gap-4'}
        ${className}`}
    >
        {children}

        {divider && (
            <div className="h-px bg-n3100" />
        )}
    </div>
);

export default Section;