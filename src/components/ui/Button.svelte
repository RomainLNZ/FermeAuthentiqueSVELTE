<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
        onclick?: () => void | Boolean | null;
        secondary?: Boolean;
        text?: Boolean;
    };

    const { children, secondary = false, text = false, onclick }: Props = $props();
</script>

<!-- <button class:secondary {onclick}>{@render children()}</button> -->
<button class:secondary class:text {onclick}>{@render children()}</button>

<style lang="scss">
    button {
        font-size: 1rem;
        padding: .4rem 1.4rem;
        border: none;
        border-radius: .4rem;
        background: $green;

        &.secondary {
            color: $white;
            background: $red;  
        }

        &.text {
            color: $dark;
            background: none;
        }
    }
</style>