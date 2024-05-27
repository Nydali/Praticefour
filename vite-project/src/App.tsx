import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoCard from './components/infocard';

function App() {
  return (
    <div>
      <InfoCard name="Alice" />
      <InfoCard name="Bob" />
      <InfoCard name="Charlie" />
      <InfoCard name="David" />
      <InfoCard name="Eve" />
    </div>
  );
}

export default App;

