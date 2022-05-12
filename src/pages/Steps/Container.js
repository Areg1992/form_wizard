import React, {useState} from 'react';
import './Steps.scss';
import {useHistory} from 'react-router-dom';
import Button from "../../components/Button/Button";
import Summary from "./Summary";
import Start from "../Start/Start";
import FormStep from "./FormStep";
import {packagesList} from "../../data/data";

const Container = () => {
    const history = useHistory();
    const [step, setStep] = React.useState(0);
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [country, setCountry] = React.useState(0);
    const [packageName, setPackageName] = React.useState(packagesList[0]);
    const [price, setPrice] = useState(0);

    const next = () => {
        if(step > 0 && age >= 100) {
            history.push('/not-found');
        } else {
            setStep(step + 1)
        }
    };

    const back = () => {
        setStep(step - 1)
    };

    return (
        <>
            {step ===  0 ?
                <Start/>
                :
                step === 1 ?
                <FormStep name={name}
                          setName={setName}
                          age={age}
                          country={country}
                          setAge={setAge}
                          setCountry={setCountry}
                          packageName={packageName}
                          setPackageName={setPackageName}
                          price={price}
                          setPrice={setPrice}
                />
                : <Summary name={name}
                           age={age}
                           country={country}
                           packageName={packageName}
                           premiumPrice={`${price}${country.currency}`}
                    />
            }

            <div className="flex-container align-center column-gap">
                {step !== 0 ?
                    <Button primary={false}
                            text={'Back'}
                            onClick={back}
                    />
                    : ''}

                <Button primary={true}
                        onClick={next}
                        text={step === 0 ? 'Start' : "Next"}
                />
            </div>

        </>
    );
};

export default Container;