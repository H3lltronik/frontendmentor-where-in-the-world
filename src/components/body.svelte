<main class="col-12 body">
    <div class="row h-100">
        <div class="content-container container h-100" style="overflow-y: auto; overflow-x: hidden;">
            <Router>
                <ContainerTransition>
                    <Route path="/">
                        <RouteTransition direction="forward">
                            <Index/>
                        </RouteTransition>
                    </Route>
                    <Route path="/details/:name" let:params>
                        <RouteTransition direction="backward">
                            <Details name={params.name}/>
                        </RouteTransition>
                    </Route>
                </ContainerTransition>
            </Router>
        </div>
    </div>

    {#if $loading}
        <div class="loading">
            <BarLoader size="120" color="#212e37" unit="px" duration="1s"></BarLoader>
        </div>
    {/if}
</main>

<script lang="ts">
    import {loading} from '../store'
    import Index from '../pages/Index.svelte'
    import Details from '../pages/Details.svelte'
    import { BarLoader } from 'svelte-loading-spinners'
    import { Router, Route } from "svelte-navigator";
    import RouteTransition from './transition/RouteTransition.svelte'
    import ContainerTransition from './transition/TransitionContainer.svelte'
</script>

<style lang="scss">
    .body {
        flex: 1;
        overflow: hidden;
        position: relative;
    }
    .loading {
        display: flex;
        position: absolute;
        top: 0; left: 0;
        align-items: center;
        justify-content: center;
        width: 100vw; height: 100vh;
        background-color: rgba(gray, 0.3);
    }
</style>