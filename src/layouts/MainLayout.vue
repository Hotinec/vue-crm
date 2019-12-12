<template lang="pug">
  .app-main-layout
    Navbar(@togle='isOpen = !isOpen')
    Sidebar(v-model="isOpen")
    main.app-content(:class="{full: !isOpen}")
      .app-page
        router-view
    .fixed-action-btn
      router-link(
        class="btn-floating btn-large blue"
        to="/record"
        cursor="pointer"
      )
        i(class="large material-icons") add
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import Sidebar from '@/components/app/SideBar.vue'

export default {
  data: () => ({
    isOpen: true
  }),
  components: { Navbar, Sidebar }
}
</script>
