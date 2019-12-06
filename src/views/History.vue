<template lang="pug">
  div
    .page-title
      h3 История записей
    .history-chart
      canvas
    section
      table
        thead
          tr
            each item in ['#', 'Сумма', 'Дата', 'Категория', 'Тип', 'Открыть']
              th= item
        tbody
          tr
            td 1
            td 1212
            td 12.12.32
            td name
            td
              span(class="white-text badge red") Расход
            td
              button(class="btn-small btn")
                i.material-icons open_in_new
</template>
