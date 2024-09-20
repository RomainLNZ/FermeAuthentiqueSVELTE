<script lang="ts">
    import cart from "$img/cart.svg";
    import map from "$img/map.svg";
    import account from "$img/account.svg";
    import MapIcon from "~icons/heroicons/map-16-solid";
    import Account from "~icons/heroicons/user-16-solid";
    import CartIcon from "~icons/heroicons/shopping-cart-16-solid";
    import ArrowIcon from "~icons/heroicons/arrow-turn-down-right-16-solid";
    import Modal from "$components/ui/Modal.svelte";
    import Button from "$components/ui/Button.svelte";
    import Input from "$components/ui/Input.svelte";
    import { fly } from "svelte/transition";

    

    let signinModal = $state(false);
    let signup = $state(false);
    let location = $state(false);
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

{#if signinModal}
    <Modal form title={signup ? 'Création de compte' : 'Connexion'} onClose={() => signinModal = !signinModal}>
        {#snippet content()}
            {#if !signup}
                <div class="signin" in:fly={{duration: 800, x: 50, delay: 300 }} out:fly={{duration: 800, x: -50 }} >
                    <Input Icon={ArrowIcon} placeholder="Email"/>
                    <Input Icon={ArrowIcon} placeholder="Mot de passe"/>
                </div>
            {:else}
                <div class="signup" in:fly={{duration: 800, x: 50, delay: 300 }} out:fly={{duration: 800, x: -50 }} >
                    <Input Icon={ArrowIcon} placeholder="Prénom"/>
                    <Input Icon={ArrowIcon} placeholder="Nom"/>
                    <Input Icon={ArrowIcon} placeholder="Email"/>
                    <Input Icon={ArrowIcon} placeholder="Mot de passe"/>
                </div>
            {/if}
        {/snippet}
        {#snippet actions()}
        {#if !signup}
                <div class="btn" in:fly={{duration: 500, y: 20, delay: 500 }} out:fly={{duration: 500, y: 20 }} >
                    <Button onclick={() => {}}>Connexion</Button>
                    <Button text onclick={() => signup = !signup }>Créer un compte</Button>
                </div>
            {:else}
                <div class="btn" in:fly={{duration: 500, y: 20, delay: 500 }} out:fly={{duration: 500, y: 20 }} >
                    <Button onclick={() => {}}>Valider</Button>
                    <Button text onclick={() => signup = !signup }>Déjà membre</Button>
                </div>
            {/if}
        {/snippet}
    </Modal>
{/if}

<style lang="scss">
    nav {
        width: calc(100% - 2rem);
        height: 3rem;
        padding-right: 2rem;
        position: absolute;
        top: 100vh;
        transform: translateY(-3rem);
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 2rem;

        button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            transition: 0.3s;

            &:hover {
                color: $red;
            }
        }
    }

    .signin, .signup {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

    }

    .btn {
        position: absolute;
    }
</style>
