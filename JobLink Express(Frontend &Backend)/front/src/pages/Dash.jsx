import { useSelector } from 'react-redux';
import AdminDash from './AdminDash';
import NotFound from './NotFound';
import UserDash from './UserDash';


const Dash = () => {
  

  const Checkrole = useSelector(state => state.allroles.roles[0]?.Checkrole); 

  if (Checkrole === 'admin') {
    return <AdminDash />;
  } else if (Checkrole === 'user') {
    return <UserDash />;
  } else {
    
    return <NotFound />;
  }
};

export default Dash;
