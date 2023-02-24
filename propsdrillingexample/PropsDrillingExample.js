import React from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';
const PropsDrillingExample = () => {
    let name="Mohini Raut"
  return (
    <div>
<ChildA name={name}/>
    </div>
  )
}

export default PropsDrillingExample