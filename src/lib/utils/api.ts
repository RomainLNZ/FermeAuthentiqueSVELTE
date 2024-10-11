const url = 'http://localhost/routes/';

type BodyFetch = {
    [key: string]: string
}

const myfetch = async (method: string, route: string, body?: BodyFetch | null) => {



    //attente reponse de l'api ( pour verification de la reception des info en php)
    const response = await fetch(`${url}${route}.php`, {
        method: method,
        credentials: "include",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: body ? (new URLSearchParams(body)).toString() : null
    });

    const json = await response.json();

    return {
        server: response,
        back: json,
    }
}

const post = async (route: string, body: BodyFetch) => await myfetch('POST', route, body);
const get = async (route: string) => await myfetch('GET', route);
const update = async (route: string, body: BodyFetch) => await myfetch('UPDATE', route, body);
const put = async (route: string, body: BodyFetch) => await myfetch('PUT', route, body);

export default { post, get, update, put };