import React from 'react'
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return(
           <>
           <main>
            <Outlet></Outlet>
           </main>




           </>
  )
  
};

export default AppLayout;