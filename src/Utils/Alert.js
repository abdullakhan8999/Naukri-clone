import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showNotification = (message, type) => {
   toast(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: 'light',
      type: type,
      transition: Zoom,
   });
};

export default showNotification;