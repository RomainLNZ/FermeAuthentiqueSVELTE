import api from '$lib/utils/api';
import { writable, type Writable } from 'svelte/store';

export type DataAuth = {
    firstname: string;
    lastname: string;
    email: string;
}

const auth: Writable<false | DataAuth> = writable(false, () => {
    initLog();
});

const initLog = async () => {
    try {
        const response = await api.get('users/auth');
        if (response.server.status === 200) {
            if (response.back.code == 'Is connected') {
                if (response.back.data) {
                    return auth.set(response.back.data as DataAuth);
                }
            }
        }


        auth.set(false);
    } catch (error) {
        auth.set(false);
    }
}

export default { auth };



//auth.subscribe(value => {
// Cette fonction s'execute chaque fois que la valeur du store "auth" est changé
// (généralement après l'utilisation d'une fonction auth.set() ou auth.update())


// value est la valeur du store au moment de l'execution du store (false dans ce cas ci)
//})

//auth.set(true);
// Permet de modifier la valeur du store
// (tous les ecouteurs "subscribe" seront automatiquement appele apres la modification)

//auth.update(value => { return !value });
// Permet de modifier la valeur du store en fonction de sa valeur actuel
// "value" represente sa valeur actuel, et il faut retouner la nouvelle valeur a lui affecté
// (tous les ecouteurs "subscribe" seront automatiquement appele apres la modification)