import React from 'react'

const RecordPopup = ({ onClose, record }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Access Records</h2>
                <img src={record.image} className='w-96 h-96'alt={record.name}/>
                <h4>{record.name}</h4>
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecordPopup;