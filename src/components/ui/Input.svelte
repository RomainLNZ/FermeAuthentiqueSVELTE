<script lang="ts">
    import IconType from "~icons/heroicons/map-16-solid";

    type Props = {
        Icon?: typeof IconType | null;
        value?: string;
        placeholder?: string;
        error?: string;
    };

    let { value = $bindable(), Icon, placeholder, error}: Props = $props();
</script>

<div>
    {#if Icon}
        <Icon />
    {/if}
    <input bind:value type="text" placeholder={placeholder}/>
    <small>{error}</small>
</div>

<style lang="scss">
    div {
        padding: 0.4rem 0.7rem;
        display: flex;
        gap: 0.5rem;
        justify-content: start;
        align-items: center;
        border-radius: 0.4rem;
        color: $white;
        background: $green;

        input {
            padding: 0.2rem 0;
            border: none;
            flex: 1;
            color: $white;
            outline: none;
            background: none;
        }

        small {
            color: $red;
        }
    }
</style>
