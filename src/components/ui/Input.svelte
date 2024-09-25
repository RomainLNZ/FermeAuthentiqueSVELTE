<script lang="ts">
    import IconType from "~icons/heroicons/map-16-solid";
    import { fly } from "svelte/transition";

    type Props = {
        Icon?: typeof IconType | null;
        value?: string;
        placeholder?: string;
        error?: string | null;
        type?: string;
    };

    let {
        value = $bindable(),
        Icon,
        placeholder,
        error,
        type,
    }: Props = $props();
</script>

<div class="input" class:error>
    <div>
        {#if Icon}
            <Icon />
        {/if}
        <input bind:value type={type ? type : "text"} {placeholder} />
    </div>
    {#if error}
        <small
            in:fly={{ duration: 500, delay: 200, x: -10 }}
            out:fly={{ duration: 300, x: -10 }}>{error}</small
        >
    {/if}
</div>

<style lang="scss">
    .input {
        padding: 0.4rem 0.7rem;
        margin-bottom: 1.1rem;
        position: relative;
        border-radius: 0.4rem;
        color: $white;
        background: $green;
        transition: 0.3s;

        &.error {
            margin-bottom: 0rem;
            padding-bottom: 1.5rem;
        }

        div {
            display: flex;
            gap: 0.5rem;
            justify-content: start;
            align-items: center;
            input {
                padding: 0.2rem 0;
                border: none;
                flex: 1;
                color: $white;
                outline: none;
                background: none;
            }
        }

        small {
            position: absolute;
            color: $red;
            bottom: 5px;
        }
    }
</style>
