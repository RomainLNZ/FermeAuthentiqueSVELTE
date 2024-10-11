<script lang="ts">
    import Nav from "$components/layouts/Nav.svelte";
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();
</script>


{@render children()}
<Nav></Nav>
