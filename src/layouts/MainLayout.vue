<template lang="pug">
  .app-main-layout
    nav(class="navbar orange lighten-1")
      .nav-wrapper
        .navbar-left
          a(href="#")
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
    ul(class="sidenav app-sidenav open")
      each item in ['Счет', 'История', 'Планирование', 'Новая запись', 'Категории']
        li
          a(
            href="#"
            class="waves-effect waves-orange pointer"
          )= item
    main.app-content
      .app-page
        router-view
    .fixed-action-btn
      a(
        class="btn-floating btn-large blue"
        href="#"
      )
        i(class="large material-icons") add
</template>
