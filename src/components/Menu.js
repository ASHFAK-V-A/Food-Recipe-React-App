

import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";
import WishList from "./wishlist";
import { AppProvider } from "../Context/AppProvider";
import Footer from "./Footer";


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
                        <Route path="/wishlist">
                        <WishList />
                       </Route>
                    </AppProvider>
                 </Switch>
               </Router>
<Footer/>
        </>
    
    ) 
}




export default Menus