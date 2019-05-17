<template>
<div>
  <LargeLanding class="hidden-sm-and-down"/>
  <SmallLanding class="hidden-md-and-up"/>
</div>
</template>

<script>
import LargeLanding from "../components/LargeLanding"
import SmallLanding from "../components/SmallLanding"

export default {
  name: "home",
  components: {
    LargeLanding,
    SmallLanding
  }
}
</script>

