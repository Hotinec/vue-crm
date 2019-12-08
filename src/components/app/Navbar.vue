<template lang="pug">
  nav(class="navbar orange lighten-1")
    .nav-wrapper
      .navbar-left
        a(
          href="#"
          @click.prevent="$emit('togle')"
        )
          i(class="material-icons black-text") dehaze
        span.black-text 12.12.12
      ul(class="right hide-on-small-and-down")
        li
          a(
            href="#"
            class="dropdown-trigger black-text"
            data-target="dropdown"
          ) USER NAME
            i(class="material-icons right") arrow_drop_down
          ul.dropdown-content#dropdown
            li
              a(
                href="#"
                class="black-text"
              )
                i(class="material-icons") assignment_return
                span Выйти
</template>
