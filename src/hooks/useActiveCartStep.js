const useActiveCartStep = ({ headerItem }) => {
    const [activeStep, setActiveStep] = useState(headerItem);

    return { activeStep, setActiveStep };
};

export default useActiveCartStep;