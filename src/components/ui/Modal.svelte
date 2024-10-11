<script lang="ts">
    import type { Snippet } from "svelte";
    import { fly, scale } from "svelte/transition";
    import CloseIcon from "~icons/heroicons/x-mark-16-solid";

    type asyncSubmit = Promise<{ global: string; } | undefined>;

    type Props = {
        content: Snippet;
        actions?: Snippet | false;
        onClose?: () =>void;
        title?: string | null;
        form?: Boolean;
        onsubmit?: () => void | asyncSubmit | null;
        display?: Boolean;
    };

    const { content, actions = false, onClose, title = null, form = false, onsubmit, display=true }: Props = $props();

    let open = $state(false);

    $effect(() => {
        if (display) {
            setTimeout(() => open = true, 10);
        }
    });

    const closeEffect = () => {
        open = false;
        setTimeout(() => {
            if (onClose) {
                onClose()
            }
        }, 500);
    }
</script>

{#if display}
    <svelte:element this={form ? 'form' : 'section'} onsubmit={onsubmit}>
        <button onclick={closeEffect} type="button"></button>
        <div class:open>
            <button onclick={closeEffect} type="button"><CloseIcon /></button>
            {#if title}
                {#key title}            
                    <h2 in:fly={{duration: 500, y: -20, delay: 500 }} out:fly={{duration: 500, y: -20 }}>{title}</h2>
                {/key}
            {/if}
            {#key title}
                <div class="content" class:contentwa={actions} in:fly={{duration: 800, x: 50, delay: 300 }} out:fly={{duration: 800, x: -50 }}>
                    {@render content()}
                </div>
            {/key}
            {#if actions}
                {#key title}
                    <div class="actions" in:fly={{duration: 500, y: 20, delay: 500 }} out:fly={{duration: 500, y: 20 }}>
                        {@render actions()}
                    </div>
                {/key}
            {/if}
        </div>
    </svelte:element>
{/if}

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
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(233, 238, 234, 0.4);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
            transition: .5s;

            &.open {
                transform: translate(-50%, -50%) scale(1) ;
                opacity: 1;
            }

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
                height: calc(100% - 4rem);
                margin-top: 4rem;
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: .5rem;
                // overflow-x: hidden;
                // overflow-y: scroll;
                overflow-x: hidden;

                &wa {
                    height: calc(100% - 8rem);
                    margin-bottom: 4rem;
                }
            }

            .actions {
                width: calc(100% - 1rem);
                min-height: 2rem;
                position: absolute;
                bottom: 1.5rem;
                right: 1.5rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                overflow: hidden;
            }
        }
    }
</style>
