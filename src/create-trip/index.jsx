import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5'>
      <h2 className='font-bold text-3xl'>What are your travel prefferences:</h2>
      <p className='mt-3 text-gray-500 text-xl'>We don't need much, just some basic details!</p>

      <div className='mt-20'>
        <div>
          <h2 className='text-xl my-3 font-medium'>Where are you headed?</h2>
          <GooglePlacesAutocomplete 
            
          />
        </div>
      </div>
    </div>
  )
}

export default CreateTrip