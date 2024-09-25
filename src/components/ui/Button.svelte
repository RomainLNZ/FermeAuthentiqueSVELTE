<script lang="ts">
    import type { Snippet } from "svelte";
    import { fly } from "svelte/transition";
    import Spinner from "./Spinner.svelte";

    type Props = {
        children: Snippet;
        onclick?: () => void | Boolean | null;
        secondary?: Boolean;
        text?: Boolean;
        loading?: Boolean;
        test?: string;
        submit?: Boolean;
    };

    const {
        children,
        secondary = false,
        text = false,
        onclick,
        loading = false,
        test,
        submit = false,
    }: Props = $props();
</script>

<!-- <button class:secondary {onclick}>{@render children()}</button> -->
<button type={submit ? 'submit' : 'button'} class:secondary class:text {onclick}>
    <p class="template">{@render children()}</p>
    {#if loading}
        <span in:fly={{duration: 300, y:10, delay: 300}} out:fly={{duration: 300, y:-10}}>
            <Spinner/>
        </span>
    {:else}
        <span in:fly={{duration: 300, y:10, delay: 300}} out:fly={{duration: 300, y:-10}}>
            {@render children()}
        </span>
    {/if}
</button>

<style lang="scss">
    button {
        font-size: 1rem;
        padding: 0.4rem 1.4rem;
        border: none;
        position: relative;
        border-radius: 0.4rem;
        background: $green;
        overflow: hidden;

        &.secondary {
            color: $white;
            background: $red;
        }

        &.text {
            color: $dark;
            background: none;
        }

        p.template {
            margin: 0;
            padding: 0;
            opacity: 0;
        }

        span {
            max-height: 100%;
            max-width: 100%;
            height: 15rem;
            width: 15rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
