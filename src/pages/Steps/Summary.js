import React from 'react';

const Summary = ({name, age, country, packageName, premiumPrice}) => {
    return (
        <div className="page">
            <div>
                <h1>
                    Summary
                </h1>
                <h2>
                    {name}
                </h2>
                <div className="description">
                    <div>
                        <p>
                            name:
                            <span>
                                {name}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            age:
                            <span>
                                {age}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Where do you live::
                            <span>
                               {country.value}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Package:
                            <span>
                                  {packageName.name}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Premium:
                            <span>
                                {premiumPrice}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;