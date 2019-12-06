<template lang="pug">
  div
    .page-title
      h3 Профиль
    form.form
      .input-field
        input(id="description" type="text")
        label(or="description") Имя
        span(class="helper-text invalid") name
      button(class="btn waves-effect waves-light" type="submit") Обновить
        i(class="material-icons right") send
</template>
