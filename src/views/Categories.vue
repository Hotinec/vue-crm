<template lang="pug">
  div
    .page-title
      h3 Категории
    section
      .row
        div(class="col s12 m6")
          div
            div
              .page-subtitle
                h4 Создать
              form
                .input-field
                  input(
                    id="name"
                    type="text"
                  )
                  label(for="name") Название
                  span(class="helper-text invalid") Введите название
                .input-field
                  input(
                    id="limit"
                    type="number"
                  )
                  label(for="limit") Лимит
                  span(class="helper-text invalid") Минимальная величина
                button(class="btn waves-effect waves-light" type="submit") Создать
                  i(class="material-icons right") send
        div(class="col s12 m6")
</template>
