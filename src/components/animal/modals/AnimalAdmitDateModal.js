import './AnimalAdmitDateModal.css'

export const AnimalAdmitDateModal = ({ handleClose }) => {
    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <h1>Please make a modal.</h1>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        </>
    )
}