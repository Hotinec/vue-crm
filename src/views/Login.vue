<template lang="pug">
  form(
    class="card auth-card"
    @submit.prevent="submitHandler"
    )
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
    .card-action
      div
        button(class="btn waves-effect waves-light auth-submit" type="submit") Войти
          i(class="material-icons right") send
      p.center
        span Нет аккаунта?
        router-link(to="/register") Зарегистрироваться
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLentgh: minLength(6) }
  },
  methods: {
    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {
        alert(e)
      }
    }
  },
  mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>
