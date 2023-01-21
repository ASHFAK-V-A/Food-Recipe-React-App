

import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";



function Menus(){



    return(
        <>

<Router>
 
 <Header />
      <Hero />

    <Switch>
          <Route exact path="/">
               <AllMenus> 
                <SpecialDishes /> 
                 <FilteredDishes  />
                    </AllMenus>
          </Route>

          <Route path="/checkout">
                <Checkout />
          </Route>

       
    </Switch>

     </Router>

        </>
    
    ) 
}

export default Menus