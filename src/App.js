import React from 'react'

import Listingpage from './pages/listingPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
<div>
<Routes>
  
  <Route path="/" element={<Listingpage/>}/>
  

</Routes>
</div>
  )
}

export default App