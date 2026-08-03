import { useState, useEffect } from 'react';

const useExpandableList = ({ items, initialVisibleCount }) => {
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
    const [expanded, setExpanded] = useState(false);
    const canExpand = items.length > initialVisibleCount;

    useEffect(() => {
        setVisibleCount(initialVisibleCount);
        setExpanded(false);
    }, [initialVisibleCount, items.length]);

    const handleToggle = () => {
        if (expanded) {
            setVisibleCount(initialVisibleCount);
            setExpanded(false);
        } else {
            setVisibleCount(items.length);
            setExpanded(true);
        }
    };

    const visibleItems = items.slice(0, visibleCount);

    return { visibleItems,canExpand, expanded, handleToggle }
}

export default useExpandableList;