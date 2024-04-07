//import dependencies
import { Outlet} from 'react-router-dom';


// Import sub components 
import Footer from "../Components/Sub/Footer";
import HeadNav from '../Components/Sub/HeadNav';
import Line from '../Components/Sub/Utils/Line';

const PageLayout = () => {
  return (
    <>
      <HeadNav  />
      <Line color="grey" thickness="1px" length="100%" />
      <Outlet />
      <Footer />
    </>
  )
}

export default PageLayout
