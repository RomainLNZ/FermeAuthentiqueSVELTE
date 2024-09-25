import API from '../API.js';

class User extends API {
    /** @type {?string} */
    #firstname;
    /** @type {?string} */
    #lastname;
    /** @type {?string} */
    #email;
    /** @type {?string} */
    #password;

    get firstname() { return this.#firstname };

    get lastname() { return this.#lastname };

    get email() { return this.#email };

    get password() { return this.#password };

    /** @param {string} firstname */
    setFirstname = (value) => {
        if (!typeof value === 'string' || value === '') return 'Le prénom est obligatoire';
        if (value.length < 3 || value.length > 50) return 'Le nom doit faire entre 3 et 50 caractères';

        this.#firstname = value;
        return true;
    }

    /** @param {string} lastname */
    setLastname = (value) => {
        if (!typeof value === 'string' || value === '') return 'Le nom est obligatoire';
        if (value.length < 3 || value.length > 50) return 'Le nom doit faire entre 3 et 50 caractères';


        this.#lastname = value;
        return true;
    }

    /** @param {string} email */
    setEmail = (value) => {
        if (!typeof value === 'string' || value === '') return 'L\'email est obligatoire';

        this.#email = value;
        return true;
    }

    /** @param {string} password */
    setPassword = (value) => {
        if (!typeof value === 'string' || value === '') return 'Le mot de passe est obligatoire';

        this.#password = value;
        return true;
    }

    /**
     * @returns {Promise<true|{string: string}>}
     */
    register = async () => {
        if (!this.#firstname || !this.#lastname || !this.#email || !this.#password) return { 'global': 'Veuillez remplir tous les champs' };

        try {
            const response = await this.post('users/register', {
                firstname: this.#firstname,
                lastname: this.#lastname,
                email: this.#email,
                password: this.#password
            });


            return true;
        } catch (error) {
            return { 'global': 'Une erreur est survenue' };
        }
    }

    login = async () => {
        if (!this.#email || !this.#password) return { 'global': 'Veuillez remplir tous les champs' };

        try {
            const response = await this.post('users/login', {
                email: this.#email,
                password: this.#password
            });

            return true;
        } catch (error) {
            return { 'global': 'Une erreur est survenue' };
        }
    }

    islogged = async () => {
        const response = await this.get('users/auth')
        this.#firstname = response.back.data.firstname,
        this.#lastname = response.back.data.lastname,
        this.#email = response.back.data.email
    }

    update = async (type) => {
        try {
            const data = {};

            if (type == 'email') {
                data.email = this.#email;
            } else if (type == 'lastname') {
                data.lastname = this.#lastname;
            } else {
                data.firstname = this.#firstname;
            }

            const response = await this.post('users/update', data);

            return true;
        } catch (error) {
            return { 'global': 'Une erreur est survenue' };
        }
    }
}



export default User;

