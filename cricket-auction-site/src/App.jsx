import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Overview from './nav-components/overview'
import SoldPlayers from './nav-components/sold-players'
import UnsoldPlayers from './nav-components/unsold-players'
import Auth from './components/auth'
import './App.css'
import Authorisation from './components/authRequire'
import Bid from './components/bid'
import Team from './components/team'
import Details from './components/team-detail'
import TeamContext from './components/teamContextProvider'
import SoldPlayerContext from './components/soldPlayerContextProvider'
import UnsoldPlayerContextProvider from './components/unsoldContextProvider'
import About from './components/aboutus'
import Contact from './components/contact'
function App() {

  return (
    <Auth>
      <UnsoldPlayerContextProvider>
        <SoldPlayerContext>
          <TeamContext>

            <div className='app'>
              <Routes>
                <Route path='/' element={<Home />}>
                  <Route path='overview' element={<Overview />} />
                  <Route path='sold-players' element={<SoldPlayers />} />
                  <Route path='unsold-players' element={<UnsoldPlayers />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='bid' element={<Authorisation><Bid /></Authorisation>} />
                <Route path='team/:team_name' element={<Team />} />
                <Route path='About_us' element={<About />} />
                <Route path='Contact_us' element={<Contact />} />
              </Routes>

            </div>

          </TeamContext>
        </SoldPlayerContext>
      </UnsoldPlayerContextProvider>
    </Auth>
  )
}

export default App
