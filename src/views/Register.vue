<template lang="pug">
  form(class="card auth-card" @submit.prevent="submitHandler")
    .card-content
      span.card-title Домашняя бухгалтерия
      .input-field
        input(
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        )
        label(for="email") Email
        small(
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        ) Email can't be emty
        small(
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.email"
        ) Enter correct email
      .input-field
        input(
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
        )
        label(for="name") Имя
        small(
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        ) Name can't be emty
      .input-field
        input(
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        )
        label(for="password") Пароль
        small(
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        ) Password can't be emty
        small(
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.minLength"
        ) Password need to have {{$v.password.$params.minLentgh.min}} simbols. Now it is {{password.length}}
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
        router-link(to="/login") Войти!
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { required, minLentgh: minLength(6) },
    name: { required },
    agree: { checked: v => v }
  },
  methods: {
    submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      // const formData = {
      //   email: this.email,
      //   name: this.name,
      //   password: this.password
      // }
      this.$router.push('/')
    }
  }
}
</script>
