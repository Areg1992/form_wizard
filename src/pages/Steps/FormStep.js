import React, {useState, useEffect} from 'react';
import Field from "../../components/Field/Field";
import Select from "../../components/Select/Select";
import Radio from "../../components/Radio/Radio";
import {countriesList, packagesList} from "../../data/data";

const FormStep = ({name, setName, age, setAge, country, setCountry, packageName, setPackageName, setPrice, price}) => {
    const [savePrice, setSavePrice] = useState(0);
    const [superSavePrice, setSuperSavePrice] = useState(0);
    const [standardPrice, setStandardPrice] = useState(0);


    useEffect(() => {
        let standardPrice = 10 * age;
        setStandardPrice(standardPrice);
        setSavePrice(standardPrice + (standardPrice * packagesList[1].cost / 100));
        setSuperSavePrice(standardPrice + (standardPrice * packagesList[2].cost / 100));

        if(packageName.id === 1 || !Boolean(packageName)) {
            setPrice(standardPrice)
        } else if(packageName.id === 2) {
            setPrice(savePrice)
        } else {
            setPrice(superSavePrice)
        }
    }, [age, country, packageName, savePrice, setPrice, superSavePrice]);

    return (
        <div className="page text-center">
            <h1>
                Tell us about yourself
            </h1>
            <div className="flex-container align-center form-step">
               <div>
                   <div className="fields-wrapper">
                       <Field fieldName="Name"
                              required={true}
                              type="text"
                              value={name}
                              onChange={(e) => {
                                  setName(e.target.value)
                              }}
                       />
                       <Field fieldName="Age"
                              type="number"
                              required={true}
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                       />
                       <Select selectLabel="Where do you live"
                               selected={country}
                               setSelected={setCountry}
                               options={countriesList}
                       />
                   </div>
                   <div className="wrapper">
                       <div className="packages text-left">
                           {packagesList.map((item) => (
                               <Radio name="pack"
                                      key={item.id}
                                      label={`${item.name}  ${item.cost !== 0 ?  `(+${standardPrice  * item.cost / 100} ${country?.currency}, ${item.cost}%)`: ''}  `}
                                      required={true}
                                      checked={item.id === packageName.id || (!Boolean(packageName) && item.id === 1   )}
                                      onChange={() => setPackageName(item)}
                               />
                           ))}
                       </div>
                       <div className="calculation">
                           <p>
                               Your premium is:
                               {price > 0 ? price : ''} {country?.currency}
                           </p>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default FormStep;