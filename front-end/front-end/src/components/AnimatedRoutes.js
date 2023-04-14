import React from 'react'
import { Routes, Route,useLocation} from 'react-router-dom'
import Create_form from '../forms/create';
import Update_form from '../forms/update';
import Delete_form from '../forms/delete';
import Read_form from '../forms/read';
import{AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location=useLocation();

  return (
    <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname} >
    <Route path="/" element={<Create_form />} />
    <Route path="/update" element={<Update_form />} />
    <Route  path="/delete" element={<Delete_form />} />
    <Route path="/read" element={<Read_form />} />
    </Routes>
    </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes