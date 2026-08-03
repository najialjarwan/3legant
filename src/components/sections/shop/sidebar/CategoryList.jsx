import { SHOP_CATEGORIES } from '@data';

const CategoryList = ({ value, onChange }) => {
    const handleSelect = (id) => {
        onChange(id);
    };

    return (
        <ul className="flex flex-col gap-3">
            {SHOP_CATEGORIES.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() => handleSelect(item.id)}
                        className={`
                        w-fit
                        caption-1-semi capitalize
                        border-b
                        ${value === item.id
                                ? 'text-black-900 border-b-black-900'
                                : 'text-black-500 border-b-transparent'}
                        `}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default CategoryList;