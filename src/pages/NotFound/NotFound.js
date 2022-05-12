import React from 'react';
import Button from "../../components/Button/Button";

const NotFound = () => {
    return (
        <div>
            <Button primary={true}
                    text={"OK"}
                    link={'/steps'}
            />
        </div>
    );
};

export default NotFound;