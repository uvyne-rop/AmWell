import React from 'react';
import Header from'../src/components/Header/Nav';
import Telehealth from '../src/components/Main/telehealth';
import BeyondTelehealth from '../src/components/Main/BeyondTelehealth';
import "tailwindcss/tailwind.css"
import WhyAmwell from '../src/components/Main/WhyAmwell';
import ClientEmpowerment from '../src/components/Main/ClientEmpowerment';
import ExploreTech from '../src/components/Main/ExploreTech';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Telehealth/>
      <BeyondTelehealth/>
       <WhyAmwell/>
       <ClientEmpowerment/>
       <ExploreTech/>

    </div>
  )

}
export default App;