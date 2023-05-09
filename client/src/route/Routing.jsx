import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CustomerForm } from '../form/CustomerForm'
import { Other } from '../other/Other'
import Nav  from '../nav/Nav'
import { View } from '../view/View'


export const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
            <Routes>
            <Route path='/' element={<CustomerForm/>} />
                <Route path = '/other' element = {<Other/>}/>
                <Route path = '/form' element = {<CustomerForm/>}/>
                <Route path = '/view' element = {<View/>}/>
            </Routes>
      
        </BrowserRouter>
    </div>
  )
}
