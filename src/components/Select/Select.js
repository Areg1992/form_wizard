import React, {useEffect, useState} from 'react';
import './Select.scss';

const Select = ({selected, setSelected, selectLabel, options}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setSelected(options[0]);
    },[options, setSelected]);

    return (
        <div className="select">
            <div className="select-label">
                {selectLabel}
            </div>
            <div className="select-btn"  onClick={(e) => setIsActive(!isActive)}>
                {selected?.value}
            </div>
            {isActive && (
                <div className="select-content">
                    {options.map((option) => (
                        <div key={option.id}
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="select-item"
                        >
                            {option.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default Select;