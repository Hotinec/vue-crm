<template lang="pug">
  div
    .page-title
      h3 Новая запись
    form.form
      .input-field
        .select
          option name cat
        label Выберите категорию
      p
        label
          input(
            class="with-gap"
            name="type"
            type="radio"
            value="income"
          )
          span Доход
      p
        label
          input(
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
          )
          span Расход
      .input-field
        input(
          id="amount"
          type="number"
        )
        label(for="amount") Сумма
        span(class="helper-text invalid") amount пароль
      .input-field
        input(
          id="description"
          type="text"
        )
        label(for="description") Описание
        span(class="helper-text invalid") description пароль
      button(class="btn waves-effect waves-light" type="submit") Создать
        i(class="material-icons right") send
</template>
