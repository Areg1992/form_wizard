import React from 'react';
import './NotFound.scss';
import Button from "../../components/Button/Button";

const NotFound = () => {
    return (
        <div className="flex-container align-center align-middle no-found">
            <div className="wrapper">
                <h1>
                    Ooops
                </h1>
                <div className="description">
                    <p>
                        Your age is over our accepted limit.
                        <br/>
                        We are sorry but we cannot insure you now
                    </p>
                </div>

                <Button primary={true}
                        text={"OK :("}
                        link={'/'}
                />
            </div>
        </div>
    );
};

export default NotFound;