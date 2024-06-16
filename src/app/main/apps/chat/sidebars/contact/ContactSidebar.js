import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { selectContactById } from '../../store/contactsSlice';
import ContactAvatar from '../../ContactAvatar';
import { ChatAppContext } from '../../ChatApp';

function ContactSidebar(props) {
  const { setContactSidebarOpen } = useContext(ChatAppContext);
  const routeParams = useParams();
  const contactId = routeParams.id;
  const contact = useSelector((state) => selectContactById(state, contactId));

  if (!contact) {
    return null;
  }

}

export default ContactSidebar;
