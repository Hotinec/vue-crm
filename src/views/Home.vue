<template lang="pug">
  .home
    .page-title
      h3 Счет
      button(class="btn waves-effect waves-light btn-small")
        i.material-icons refresh
    .row
      div(class="col s12 m6 l4")
        div(class="card light-blue bill-card")
          div(class="card-content white-text")
            span.card-title Счет в валюте
            p.currency-line
              span 12.0 Р
      div(class="col s12 m6 l8")
        div(class="card orange darken-3 bill-card")
          div(class="card-content white-text")
            .card-header
              span.card-title Курс валют
            table
              thead
                tr
                  each item in ['Валюта', 'Курс', 'Дата']
                    th= item
              tbody
                tr
                  td руб
                  td 12121
                  td 12.12.12
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
