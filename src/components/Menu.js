


import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";



function Menus(){



    return(
        <>
 {/* Components */}
  <Header />
   <Hero />


{/* Step 2  = Creating Wrapper  for passing into child components*/}

<AllMenus> 

   
    <SpecialDishes /> 
    
   <FilteredDishes  />
  </AllMenus>
        </>
        ///====//
    )
}

export default Menus