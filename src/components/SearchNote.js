import React from 'react'
import {MdSearch} from 'react-icons/md';

function SearchNote({handleSearchNote}) {
  return (
    <div className='search'>
        <MdSearch/>
        <input type="text" name="" placeholder='type to search....' onChange={(event)=>handleSearchNote(event.target.value)}/>
    </div>
  )
}

export default SearchNote