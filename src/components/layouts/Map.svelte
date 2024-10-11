<script lang="ts">
    import type { Snippet } from "svelte";
    import { fly } from "svelte/transition";
    import CloseIcon from "~icons/heroicons/x-mark-16-solid";


    type Props = {
        children: Snippet;
        onclick?: () => void | Boolean | null;
        display: Boolean;
    };

    const location = true;
</script>

<!-- {#if location} -->

    <section in:fly={{ duration: 500, x: "100%", delay: 500 }}>
        <div id="map"></div>
        <div class="farms">
            <div id="right-side">
                <button onclick={close} type="button"><CloseIcon /></button>
                <!-- <form id="search" action="" method="">
                    <input
                        class="search__input"
                        type="text"
                        placeholder="Rechercher..."
                        name="search"
                    />
                    <button class="search__btn" type="submit">
                        <img class="search" alt="search" />
                    </button>
                </form> -->

                <div id="farms"></div>
            </div>
        </div>
    </section>
<!-- {/if} -->

<style lang="scss">
    section {
        width: 100%;
        height: 100vh;
        height: 100dvh;
        position: absolute;
        top: 0;
        right: -100%;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        background: red;
        // transition: .5s;

        #map {
            width: 50%;
            height: 300px;
        }
    }
</style>
