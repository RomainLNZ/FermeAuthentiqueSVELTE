<span class="loader"></span>

<style lang="scss">
    .loader {
        height: 5rem;
        max-height: 75%;
        max-width: 75%;
        aspect-ratio: 1;
        border-radius: 50%;
        display: inline-block;
        border-top: 2px solid $white;
        border-right: 2px solid transparent;
        box-sizing: border-box;
        animation: rotation 2s linear infinite;
    }
    .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border-bottom: 2px solid $red;
        border-left: 2px solid transparent;
    }
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
