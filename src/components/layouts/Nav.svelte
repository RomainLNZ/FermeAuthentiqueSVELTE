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

    

    let signinModal = $state(false);
    let signup = $state(false);
    let location = $state(false);

    let connectIsLoading = $state(false);

    const connect = () => {
        connectIsLoading = true;

        setTimeout(() => {
            
            connectIsLoading = false;
        }, 3000);
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

<Modal display={signinModal} title={signup ? 'Création de compte' : 'Connexion'} onClose={() => signinModal = !signinModal} form>
    {#snippet content()}
        {#if !signup}
            <Input Icon={mail} placeholder="Email"/>
            <Input Icon={Password} placeholder="Mot de passe"/>
        {:else}
            <Input Icon={User} placeholder="Prénom"/>
            <Input Icon={User} placeholder="Nom"/>
            <Input Icon={mail} placeholder="Email"/>
            <Input Icon={Password} placeholder="Mot de passe"/>
        {/if}
    {/snippet}
    {#snippet actions()}
        {#if !signup}
            <Button onclick={connect} loading={connectIsLoading}>Connexion</Button>
            <Button text onclick={() => signup = !signup }>Créer un compte</Button>
        {:else}
            <Button onclick={() => {}}>Valider</Button>
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
