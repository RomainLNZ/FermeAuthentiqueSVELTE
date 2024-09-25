<script lang="ts">
    import cart from "$img/cart.svg";
    import map from "$img/map.svg";
    import account from "$img/account.svg";
    import MapIcon from "~icons/heroicons/map-16-solid";
    import Account from "~icons/heroicons/user-16-solid";
    import CartIcon from "~icons/heroicons/shopping-cart-16-solid";
    import ArrowIcon from "~icons/heroicons/arrow-turn-down-right-16-solid";
    import User from "~icons/heroicons/user-16-solid";
    import mail from "~icons/heroicons/envelope-16-solid";
    import Password from "~icons/heroicons/lock-closed-16-solid";
    import Modal from "$components/ui/Modal.svelte";
    import Button from "$components/ui/Button.svelte";
    import Input from "$components/ui/Input.svelte";
    import { fly } from "svelte/transition";
    import api from "$lib/utils/api";


    let signinModal = $state(false);
    let signup = $state(false);
    let location = $state(false);

    let connectIsLoading = $state(false);
    
    let connectMail = $state('');
    let connectPassword = $state('');

    let signinIsLoading = $state(false);

    let singinFirstname = $state('');
    let singinFirstnameError: string | null = $state(null);
    let singinLastname = $state('');
    let singinLastnameError: string | null = $state(null);
    let singinEmail = $state('');
    let singinEmailError: string | null = $state(null);
    let singinPassword = $state('');
    let singinPasswordError: string | null = $state(null);
    
    let title = $derived(signup ? 'Création de compte' : 'Connexion');

    const connect = () => {
        connectIsLoading = true;

        setTimeout(() => {
            
            connectIsLoading = false;
        }, 3000);
    }


    const register = async () => {
        try {
            signinIsLoading = true;

            const response = await api.post('users/register', {
                firstname: singinFirstname,
                lastname: singinLastname,
                email: singinEmail,
                password: singinPassword
            });

            if (response.server.status === 200) {
                if (response.back.code == "form-error") {
                    if (response.back.data.firstname) {
                        singinFirstnameError = response.back.data.firstname;
                    }
                    if (response.back.data.lastname) {
                        singinLastnameError = response.back.data.lastname;
                    }
                    if (response.back.data.email) {
                        singinEmailError = response.back.data.email;
                    }
                    if (response.back.data.password) {
                        singinPasswordError = response.back.data.password;
                    }
                }

            } else {
            
            }
        } catch (error) {
            return { 'global': 'Une erreur est survenue' };
        }

        signinIsLoading = false;
        // setTimeout(() => {
        // }, 300);
    }
</script>

<nav>
    <button onclick={() => (location = !location)}>
        <MapIcon />
    </button>
    <button onclick={() => (signinModal = !signinModal)}>
        <Account />
    </button>
    <button>
        <CartIcon />
    </button>
</nav>

<Modal display={signinModal} {title} onsubmit={register} onClose={() => signinModal = !signinModal} form>
    {#snippet content()}
        {#if !signup}
            <Input bind:value={connectMail} Icon={mail} placeholder="Email"/>
            <Input bind:value={connectPassword} Icon={Password} type="password" placeholder="Mot de passe"/>
        {:else}
            <Input error={singinFirstnameError} bind:value={singinFirstname} Icon={User} placeholder="Prénom"/>
            <Input error={singinLastnameError} bind:value={singinLastname} Icon={User} placeholder="Nom"/>
            <Input error={singinEmailError} bind:value={singinEmail} Icon={mail} placeholder="Email"/>       
            <Input error={singinPasswordError} bind:value={singinPassword} Icon={Password} type="password" placeholder="Mot de passe"/>
        {/if}
            {/snippet}
    {#snippet actions()}
        {#if !signup}
            <Button loading={connectIsLoading} submit>Connexion</Button>
            <Button text onclick={() => signup = !signup }>Créer un compte</Button>
        {:else}
            <Button loading={signinIsLoading} submit>Valider</Button>
            <Button text onclick={() => signup = !signup }>Déjà membre</Button>
        {/if}
    {/snippet}
</Modal>

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
