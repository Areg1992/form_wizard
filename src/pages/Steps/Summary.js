import React from 'react';

const Summary = ({name, age, country, packageName, premiumPrice}) => {
    return (
        <div className="page">
            <div className="wrapper">
                <h1>
                    Summary
                </h1>
                <h3>
                    {name}
                </h3>
                <div>
                    <div>
                        name:
                        <span>
                            {name}
                        </span>
                    </div>
                    <div>
                        age:
                        <span>
                            {age}
                        </span>
                    </div>
                    <div>
                        Where do you live:
                        <span>
                            {country.value}
                        </span>
                    </div>
                    <div>
                        Package:
                        <span>
                            {packageName.name}
                        </span>
                    </div>
                    <div>
                        Premium:
                        <span>
                            {premiumPrice}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;