import Router from 'router';
import 'vconsole';
import attachFastClick from 'fastclick';
import './app.less';
import Home from './home/home';
import Register from './register/register';
import Profile from './profile/profile';
import Setting from './setting/setting';

attachFastClick.attach(document.body);

const router = new Router();
router.push(Home).push(Register).push(Profile).push(Setting).setDefault('/').init();