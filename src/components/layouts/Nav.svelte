<script lang="ts">
    import { fly } from "svelte/transition";

    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    import Modal from "$components/ui/Modal.svelte";
    import Button from "$components/ui/Button.svelte";
    import Input from "$components/ui/Input.svelte";
    import Toast from "$components/ui/Toast.svelte";

    import api from "$lib/utils/api";
    import user, { type DataAuth } from "$stores/user";

    import map from "$img/map.svg";
    import MapIcon from "~icons/heroicons/map-16-solid";
    import Account from "~icons/heroicons/user-16-solid";
    import CartIcon from "~icons/heroicons/shopping-cart-16-solid";
    import User from "~icons/heroicons/user-16-solid";
    import mail from "~icons/heroicons/envelope-16-solid";
    import Password from "~icons/heroicons/lock-closed-16-solid";
    import Home from "~icons/heroicons/home-20-solid";
    import { onMount } from "svelte";



    let signinModal = $state(false);
    let signup = $state(false);
    let location = $state(false);

    let connectIsLoading = $state(false);
    
    let connectMail = $state('');
    let connectPassword = $state('');
    let conEr: string | null = $state(null);

    let sinIsLoading = $state(false);

    let sinFirstname = $state('');
    let sinFirstnameEr: string | null = $state(null);
    let sinLastname = $state('');
    let sinLastnameEr: string | null = $state(null);
    let singinEmail = $state('');
    let singinEmailEr: string | null = $state(null);
    let singinPassword = $state('');
    let singinPasswordEr: string | null = $state(null);

    let successModal = $state(false);

    let auth: false | DataAuth = $state(false);
    
    onMount(() => {
        const unsubscribe =  user.auth.subscribe(value => auth = value);
        return () => unsubscribe();
    });

    let title = $derived(signup ? 'Création de compte' : 'Connexion');

    let conErDisplay = $derived(conEr ? conEr : null);

    let sinFirstnameErDisplay = $derived.by(() => {
        if (sinFirstnameEr) return sinFirstnameEr;
        
        if (sinFirstname.length === 0) return null;
        if (sinFirstname.length < 3) return 'Entre 3 et 50 caracteres.';
        return null;
    });

    let sinLastnameErDisplay = $derived.by(() => {
        if (sinLastnameEr) return sinLastnameEr;
        
        if (sinLastname.length === 0) return null;
        if (sinLastname.length < 3) return 'Entre 3 et 50 caracteres.';
        return null;
    });

    let sinEmailErDisplay = $derived.by(() => {
        if (singinEmailEr) return singinEmailEr;
        
        if (singinEmail.length === 0) return null;
        if (singinEmail.length < 3) return 'Email invalide.';
        return null;
    });

    let sinPasswordErDisplay = $derived.by(() => {
        if (singinPasswordEr) return singinPasswordEr;
        
        if (singinPassword.length === 0) return null;
        if (singinPassword.length < 3) return 'Au moins 3 caractères.';
        return null;
    });

    const connect = async () => {
        try {
            connectIsLoading = true
            const response = await api.post('users/login', {
                email: connectMail,
                password: connectPassword
            });

            if (response.server.status === 200) {
                if (response.back.code == "failed") {
                    conEr = response.back.message;
                }
            
                if (response.back.code === 'success' && response.back.data) {
                    signinModal = !signinModal;
                    user.auth.set(response.back.data as DataAuth);
                    successModal = true;
                    setTimeout(() => {
                        successModal = false;
                    }, 6000);
                }
            } else {
                
            }
        } catch (error) {
            return { 'global': 'Une erreur est survenue' };
        }
        
        connectIsLoading = false;
        // setTimeout(() => {
            
        // }, 3000);
    }

    const register = async () => {
        try {
            sinIsLoading = true;

            const response = await api.post('users/register', {
                firstname: sinFirstname,
                lastname: sinLastname,
                email: singinEmail,
                password: singinPassword
            });

            if (response.server.status === 200) {
                if (response.back.code == "form-error") {
                    if (response.back.data.firstname) {
                        sinFirstnameEr = response.back.data.firstname;
                    }
                    if (response.back.data.lastname) {
                        sinLastnameEr = response.back.data.lastname;
                    }
                    if (response.back.data.email) {
                        singinEmailEr = response.back.data.email;
                    }
                    if (response.back.data.password) {
                        singinPasswordEr = response.back.data.password;
                    }
                }

                if (response.back.code === 'success' && response.back.data) {
                    signinModal = !signinModal;
                    user.auth.set(response.back.data as DataAuth);
                }

            } else {
            
            }
        } catch (error) {
            return { 'global': 'Une erreur est survenue' };
        }

        sinIsLoading = false;
        // setTimeout(() => {
        // }, 300);
    }
</script>

<nav>
    <button onclick={() => (location = !location) }>
            <MapIcon />
    </button>
    <button onclick={() => !auth ? signinModal = !signinModal : goto('/userProfil', {
        replaceState: $page.route.id === '/userProfil',
    })}>
        <Account />
    </button>
    <button>
        <CartIcon />
    </button>
    <button onclick={() => goto('/', {
        replaceState: $page.route.id === '/',
    })}>
    <Home/>
    </button>
</nav>

{#if !auth}
    <Modal display={signinModal} {title} onsubmit={signup? register : connect} onClose={() => signinModal = !signinModal} form>
        {#snippet content()}
            {#if !signup}
                <div class="connectPart">
                    <Input bind:value={connectMail} Icon={mail} placeholder="Email"/>
                    <Input bind:value={connectPassword} Icon={Password} type="password" placeholder="Mot de passe"/>
                    {#if conErDisplay}
                        <small transition:fly={{duration: 500, y: 10}}>{conErDisplay}</small>
                    {/if}
                </div>
            {:else}
                <Input error={sinFirstnameErDisplay} bind:value={sinFirstname} Icon={User} placeholder="Prénom"/>
                <Input error={sinLastnameErDisplay} bind:value={sinLastname} Icon={User} placeholder="Nom"/>
                <Input error={sinEmailErDisplay} bind:value={singinEmail} Icon={mail} placeholder="Email"/>       
                <Input error={sinPasswordErDisplay} bind:value={singinPassword} Icon={Password} type="password" placeholder="Mot de passe"/>
            {/if}
        {/snippet}
        {#snippet actions()}
            {#if !signup}
                <Button loading={connectIsLoading} submit>Connexion</Button>
                <Button text onclick={() => signup = !signup }>Créer un compte</Button>
            {:else}
                <Button loading={sinIsLoading} submit>Valider</Button>
                <Button text onclick={() => signup = !signup }>Déjà membre</Button>
            {/if}
        {/snippet}
    </Modal>
{/if}

<!-- toast -->
<!-- <Toast display={conErDisplay ? true : false} success>Vous etes connecté</Toast> -->



<Toast display={successModal} success>Vous êtes connecté !</Toast>
<Toast display={conErDisplay ? true : false} danger>Échec de connexion</Toast>





<style lang="scss">
    nav {
        width: calc(100% - 2rem);
        height: 3rem;
        padding-right: 2rem;
        position: absolute;
        top: 100vh;
        top: 100dvh;
        transform: translateY(-3rem);
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 2rem;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            // cursor: pointer;
            font-size: 1.5rem;
            transition: 0.3s;

            &:hover {
                color: $red;
            }
        }
    }

    .connectPart {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        small {
            width: 25rem;
            position: absolute;
            top: calc(100% + 2rem);
            text-align: center;
            color: $red;
        }
    }


    @media screen and (max-width: 800px) {
        nav {
            position: fixed;
            button{
                border-radius: .5rem;
                background: $white;
            }
        }
    }

</style>
