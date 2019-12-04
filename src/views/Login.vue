<template lang="pug">
  form(class="card auth-card")
    .card-content
      span.card-title Домашняя бухгалтерия
      .input-field
        input(
          id="email"
          type="text"
          class="validate"
        )
        label(for="email") Email
        small(class="helper-text invalid") Email
      .input-field
        input(
          id="password"
          type="password"
          class="validate"
        )
        label(or="password") Пароль
        small(class="helper-text invalid") Password
    .card-action
      div
        button(
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        ) Войти
          i(lass="material-icons right") send
      p.center
        span Нет аккаунта?
        a(href="/") Зарегистрироваться
</template>