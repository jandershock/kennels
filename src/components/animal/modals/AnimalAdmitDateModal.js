import { useState } from 'react';
import { updateAnimal } from '../../../modules/AnimalManager';
import './AnimalAdmitDateModal.css'

export const AnimalAdmitDateModal = ({ animal, handleClose }) => {
    const [animalObj, setAnimalObj] = useState(animal);
    const [isLoading, setIsLoading] = useState(false);
    const [changesMade, setChangesMade] = useState(false);

    const handleFieldChange = (e) => {
        let tmp = { ...animalObj };
        tmp[e.target.id] = e.target.value;
        console.log(tmp)
        setAnimalObj(tmp);
        setChangesMade(true);
    }

    const submitChanges = () => {
        setIsLoading(true);
        updateAnimal(animalObj)
            .then(response => {
                setAnimalObj(response)
                setIsLoading(false);
                setChangesMade(false);
            })
    }

    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <div className='form-container'>
                        <h2>{animalObj.name}</h2>
                        <form>
                            <fieldset>
                                <div className="formgrid">
                                    {/* Date */}
                                    <input type="date"
                                        id="dateAdmitted"
                                        className="form-control"
                                        onChange={handleFieldChange}
                                        value={animalObj.hasOwnProperty('dateAdmitted') ? animalObj.dateAdmitted : ""}
                                        readOnly={false}></input>
                                    <label htmlFor="dateAdmitted">Date Admitted</label>
                                </div>
                            </fieldset>
                        </form>
                        <br></br>
                        <div className='button-container'>
                            <button disabled={isLoading} onClick={handleClose}>Cancel</button>
                            <button className='submit-button' disabled={isLoading || !changesMade} onClick={submitChanges}>Submit Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}