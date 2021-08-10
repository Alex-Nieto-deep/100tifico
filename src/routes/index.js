import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHast from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const footer = null || document.getElementById('footer');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  footer.innerHTML = await Footer();
};

export default router;