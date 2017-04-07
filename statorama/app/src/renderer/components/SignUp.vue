<template>
    <div>
        <signup-header></signup-header>
       <signup-form></signup-form>
       <button><router-link to="/">Home</router-link></button>
    </div>
</template>

<script>
  import SignupForm from './SignUpView/SignupForm'
  import SignupHeader from './SignUpView/SignupHeader'
  export default {
    components: {
      SignupForm,
      SignupHeader
    },
    name: 'sign-up'
  }
</script>

