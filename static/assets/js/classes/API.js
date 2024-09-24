class API {
	url = 'http://localhost/api/routes/';


    fetch = async (method, route, body = null) => {
        //attente reponse de l'api ( pour verification de la reception des info en php)
        const reponse = await fetch(`${this.url}${route}.php`, {
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },

            body: body ? (new URLSearchParams(body)).toString() : null
        });

        const json = await reponse.json();

        return {
            server: reponse,
            back: json,
        }
    }

    post = async (route, body) => await this.fetch('POST', route, body);
    get = async (route) => await this.fetch('GET', route);
    update = async (route, body) => await this.fetch('UPDATE', route, body);
    put = async (route, body) => await this.fetch('PUT', route, body);
}

export default API;