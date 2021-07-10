<div class="body content-container container">
    <Router>
        <Route path="/">
            <Index/>
        </Route>
        <Route path="/details/:slug">
            <Details/>
        </Route>
    </Router>
</div>

<script lang="ts">
    import Index from '../pages/Index.svelte'
    import Details from '../pages/Details.svelte'
    import { Router, Route } from "svelte-navigator";
</script>

<style>
    .body {
        flex: 1;
        overflow: hidden;
    }
</style>