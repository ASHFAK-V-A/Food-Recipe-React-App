

import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from "../Context/AppProvider";


function Menus(){



    return(
        <>

<Router>
 
 <Header />
      <Hero />

    <Switch>
        <AppProvider>
          <Route exact path="/">
               <AllMenus> 
                <SpecialDishes /> 
                 <FilteredDishes  />
                    </AllMenus>        
          </Route>

          <Route path="/checkout">
        <Checkout />
          </Route>
</AppProvider>
       
    </Switch>

     </Router>

        </>
    
    ) 
}

export default Menus