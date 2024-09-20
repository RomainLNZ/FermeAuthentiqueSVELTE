<script lang="ts">
    import type { Snippet } from "svelte";
    import { fade, fly } from "svelte/transition";
    import CloseIcon from "~icons/heroicons/x-mark-16-solid";

    type Props = {
        content: Snippet;
        actions?: Snippet | false;
        onClose?: () =>void;
        title: string;
        form?: Boolean
    };

    const { content, actions = false, onClose, title, form = false }: Props = $props();

</script>

<svelte:element this={form ? 'form' : 'section'} transition:fade>
    <button onclick={onClose}></button>
    <div>
        <button onclick={onClose}><CloseIcon /></button>
        {#key title}
            <h2 in:fly={{duration: 500, y: -20, delay: 500 }} out:fly={{duration: 500, y: -20 }}>{title}</h2>
        {/key}
        <div class="content">
            {@render content()}
        </div>
        {#if actions}
            <div class="actions">
                {@render actions()}
            </div>
        {/if}
    </div>
</svelte:element>

<style lang="scss">
    section, form {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;

        > button {
            width: 100%;
            height: 100%;
            border: none;
            background: none;
        }

        > div {
            width: 60rem;
            max-width: 95vw;
            height: 30rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(233, 238, 234, 0.4);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(12.8px);
            -webkit-backdrop-filter: blur(12.8px);

            > button {
                border: none;
                background: none;
                position: absolute;
                right: 1rem;
                top: 1rem;
                z-index: 2;
                font-size: 1.5rem;
                transition: 0.5s;

                &:hover {
                    color: $red;
                }
            }

            h2 {
                width: 100%;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .content {
                width: 100%;
                flex: 1;
                margin-top: 4rem;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                overflow-x: hidden;
                overflow-y: scroll;
            }

            .actions {
                width: calc(100% - 1rem);
                min-height: 2rem;
                position: relative;
                padding-right: 1.5rem;
                padding-bottom: 1.5rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                overflow: hidden;
            }
        }
    }
</style>
