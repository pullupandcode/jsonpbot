<script lang="typescript">
  import { User } from "./types";
  export let user: User;
</script>

<header class="w-100 bg-black-90 pa3">
  <nav class="flex flex-wrap justify-between">
    <div class="w-50">
      <h1 class="ma0 white f5 mr3">JSONP Bot Admin</h1>
    </div>

    <div class="tr w-50">
      <a href="#0" class="dib mr2 link white">Link Text</a>
      <a href="#0" class="dib mr2 link white">Link Text</a>
      <a href="#" class="dib mr2 link white">Link Text</a>
      <a href="#" class="dib mr2 link white">Link Text</a>
      <a href="#" class="dib mr2 link white">Welcome, {user.name}</a>
    </div>
  </nav>
</header>
