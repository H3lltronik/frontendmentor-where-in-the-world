<script lang="ts">
  import Icon from 'mdi-svelte';
  import { mdiCardsSpade } from '@mdi/js';
  import { Router, Route, Link } from "svelte-navigator";

  import Header from './components/header.svelte';
  import Body from './components/body.svelte';
</script>

<div class="col-12">
  <div class="row">
    <Header/>
    <Body/>
  </div>
</div>

<style lang="scss" global>
  @import "../node_modules/bootstrap/scss/bootstrap";

  :root[data-theme='dark'] {
    --header-color: #2b3743;
    --body-color: rgb(33, 46, 55);
    --text-color: #fff;
    --placeholder-color: rgba(255, 255, 255, 0.7);
  }

  :root[data-theme='light'] {
    --header-color: #fff;
    --body-color: #fff;
    --text-color: #000;
    --placeholder-color: rgba(0,0,0, 0.6);
  }

  :root {
    --hover-color: rgba(33, 46, 55, 0.6);
  }

  body {
      overflow-x: hidden;
      background-color: var(--body-color);
  }

  .content-container {
      max-width: 1500px;
  }
  .page-container {
      max-width: 1900px;
  }

  .elevation {
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
  }

  .common-transition {
    transition: background-color 0.3s ease-in-out, 
                color 0.3s ease-in-out;
  }

  .transform-transition {
    transition: transform 0.2s ease-in-out;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
