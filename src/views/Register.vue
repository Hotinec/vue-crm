<template lang="pug">
  form(class="card auth-card")
    .card-content
      span.card-title Домашняя бухгалтерия
      .input-field
        input(
          id="email"
          type="text"
        )
        label(for="email") Email
        small(class="helper-text invalid") Email
      .input-field
        input(
          id="password"
          type="password"
          class="validate"
        )
        label(for="name") Имя
        small(class="helper-text invalid") Name
      p
        label
          input(type="checkbox")
          span С правилами согласен
    .card-action
      div
        button(
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        ) Зарегистрироваться
          i(class="material-icons right") send
      p.center Уже есть аккаунт?
        a(href="/") Войти!
</template>
