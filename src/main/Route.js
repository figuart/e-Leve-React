import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../view/Home'
import Sobre from '../view/Sobre'
import Blog from '../view//Blog/Blog' 
import Jogar from '../view/Jogar/Jogar'
import Parceiros from '../view/Parceiros'
import Contato from '../view/Contato'

 export default function Routes() {
   return(
     <Switch>
         <Route exact path='/' component={ Home }/>
         <Route exact path='/Sobre' component={ Sobre } />
         <Route exact path='/Blog' component={ Blog } />
         <Route exact path='/Jogar' component={ Jogar } />
         <Route exact path='/Parceiros' component={ Parceiros } />
         <Route exact path='/Contato' component={ Contato } />
     </Switch>
   )
 }
