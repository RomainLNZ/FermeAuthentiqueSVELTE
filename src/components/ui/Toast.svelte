<script lang="ts">
    import type { Snippet } from "svelte";
    import { fly, scale } from "svelte/transition";


    type Props = {
        children: Snippet;
        display?: Boolean;
        success?: Boolean;
        danger?: Boolean;
    };

    let {children, display = false, success = false, danger = false}: Props = $props();

    $effect(() => {
        if (display) {
            setTimeout(() => {
                display = false;
            }, 5000);
        }
    });
</script>

<div class="toast">
    {#if display}
        <div class:success class:danger transition:scale={{ duration: 500, start: .8 }}>
            <h3>{@render children()}</h3>
        </div>
    {/if}
</div>

<style lang="scss">
    .toast {
        div {
            padding: .5rem 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            right: 50%;
            top: 1rem;
            transform: translateX(50%);
            border-radius: .8rem;
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            background: rgba(233, 238, 234, 0.4);
            backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
    
            h3 {
                margin: 0;
                color: $dark;
            }
            
            &.success h3 {
                color: $green;
            }

            &.danger h3 {
                color: $red;
            }
        }
    }
</style>
