<h1>Création de compte</h1>

<form id="createForm" method="POST">
    <p class="mainError"></p>
    <div>
        <label for="firstname"></label>
        <input
            id="firstname"
            value=""
            type="text"
            name="firstname"
            placeholder="Prénom"
        />
        <small></small>
    </div>
    <div>
        <label for="lastname"></label>
        <input
            id="lastname"
            value=""
            type="text"
            name="lastname"
            placeholder="Nom"
        />
        <small></small>
    </div>
    <div>
        <label for="email"></label>
        <input
            id="email"
            value=""
            type="email"
            name="email"
            placeholder="E-mail"
        />
        <small></small>
    </div>
    <div>
        <label for="password"></label>
        <input
            id="password"
            type="password"
            name="password"
            placeholder="Mot de passe"
        />
        <small></small>
    </div>
    <div>
        <label for="password"></label>
        <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirmation Mot de passe"
        />
        <small></small>
    </div>
    <button id="submit-form" name="type" value="creation" type="submit"
        >Créer un compte</button
    >
</form>
<button id="go-login-form">Déjà membre ?</button>

<modal class="login_modal hidden">
    <button id="btn-close-login">
        <img src="assets/img/icons/close.png" alt="close" />
    </button>
    <h1>Connexion</h1>

    <form id="loginForm" method="POST">
        <p class="mainError"></p>
        <div>
            <label for="email-login">Email</label>
            <input
                id="email-login"
                value=""
                type="password-login"
                name="email-login"
                placeholder="E-mail"
            />
            <small></small>
        </div>
        <div>
            <label for="password-login">Mot de passe</label>
            <input
                id="password-login"
                type="password"
                name="password-login"
                placeholder="Mot de passe"
            />
            <small></small>
        </div>
        <button id="login-form" name="type" value="login" type="submit"
            >Connexion</button
        >
    </form>
    <button id="go-register-form">Créer un compte</button>
</modal>

{#if visible}
    <section id="location" transition:fly={{ x: 200, duration: 2000 }}>
        <div id="map"></div>
        <div id="right-side">
            <form id="search" action="" method="">
                <input
                    class="search__input"
                    type="text"
                    placeholder="Rechercher..."
                    name="search"
                />
                <button class="search__btn" type="submit">
                    <img class="search" src={search} alt="search" />
                </button>
            </form>
            <div id="farms"></div>
        </div>
    </section>
{/if}


tips:
const user = {
    firstname: 'qsdqd',
    lastname: 'qsdqd',
}

const {firstname, lastname} = user;