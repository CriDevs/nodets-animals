import {Router} from 'express';
import * as PageControler from '../controlers/pageControler';
import * as SearchControler from '../controlers/searchControler';

const router = Router();

router.get('/home', PageControler.home);
router.get('/dogs', PageControler.dogs);
router.get('/cats', PageControler.cats);
router.get('/fishes', PageControler.fishes);

router.get('/search', SearchControler.search)

export default router;