import { ref, get, child } from 'firebase/database';
import database from './firebase';

const dbRef = ref(database);

export const fetchMenu = () => get(child(dbRef, `menu/`));

export const fetchMenuById = (id) => get(child(dbRef, `menu/${id}`));
