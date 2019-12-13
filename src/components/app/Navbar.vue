<template lang="pug">
  nav(class="navbar orange lighten-1")
    .nav-wrapper
      .navbar-left
        a(
          href="#"
          @click.prevent="$emit('togle')"
        )
          i(class="material-icons black-text") dehaze
        span.black-text {{date | date('datetime')}}
      ul(class="right hide-on-small-and-down")
        li
          a(
            href="#"
            class="dropdown-trigger black-text"
            data-target="dropdown"
            ref="dropdown"
          ) USER NAME
            i(class="material-icons right") arrow_drop_down
          ul.dropdown-content#dropdown
            li
              router-link(
                to="/profile"
                class="black-text"
              )
                i(
                  class="material-icons"
                ) account_circle
                span Profile
            li(
              class="divider"
              tabindex="-1"
            )
            li
              a(
                href="#"
                class="black-text"
                @click.prevent="logout"
              )
                i(class="material-icons") assignment_return
                span Выйти
</template>

<script>
import M from 'materialize-css'

export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdaun: null
  }),
  mounted () {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.dropdaun = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  },
  beforeDestroy () {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdaun.destroy) {
      this.dropdaun.destroy()
    }
  },
  methods: {
    logout () {
      this.$router.push('/login?message=logout')
    }
  }
}
</script>
