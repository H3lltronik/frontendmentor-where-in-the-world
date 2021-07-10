<div class="col-12 body">
    <div class="row h-100">
        <div class="content-container container h-100">
            <Router>
                <Route path="/">
                    <Index/>
                </Route>
                <Route path="/details/:slug">
                    <Details/>
                </Route>
            </Router>
        </div>
    </div>
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