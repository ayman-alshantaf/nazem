<template>
  <section>
    <div class="group-field">
      <label>اسم المستخدم</label>
      <v-text-field placeholder="اكتب اسم المستخدم"></v-text-field>
    </div>
    <div class="group-field">
      <label>كلمه المرور</label>
      <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          hint="يجب أن لا يقل عن 8 حروف"
          counter
          @click:append="show1 = !show1"
          placeholder="اكتب كلمه المرور"
          required
      ></v-text-field>
    </div>
    <slot></slot>

  </section>
</template>

<script>
export default {
  name: "filedComponent",
  data() {
    return {
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'هذا الحقل مطلوب',
        min: v => v.length >= 8 || ' يقل عن 8 حروف',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.login-page {
@media (min-width: 1280px) {
  .v-col-lg-7 {
    flex: 0 0 54.3333333333%;
    max-width: 54.3333333333%;
  }
  .v-col-lg-5 {
    flex: 0 0 45.666667%;
    max-width: 45.666667%;
  }
}
.main-container {
  min-height: 100vh;
  background-image: url("../../../../assets/image/logo/Sign In.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
//start left section

  .left-section {
    padding: 20px 10PX;
    min-height: 100vh;
    background-color: white;
    border-radius: 0px 20px 20px 0;
    width: 100%;

.content-section {
  width: 70%;
  margin: 0 auto;
}

.logo-image {
  width: 100%;

.image {
  width: 70%;

}
}

.form-section {
h4 {
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 20px;
  color: #707070;
  font-weight: 600;

}

h2 {
  font-size: 38px;
  line-height: 30px;
  margin-bottom: 30px;
  color: #000000;
}

label {
  font-size: 18px;
  color: #272727;
  margin-bottom: 10px;
  display: inline-block;
}

.remember-login {
  display: flex;
  justify-content: space-between;

.checkbox-input{
input[type=checkbox]{
  margin-left: 8px;
  padding: 10px;
  transform: scale(1.2);
}
label{
  font-size: 15px;
}
}
}

.password-remember{
.custom-link{
  color:$linkColor ;
  font-size: 16px;
}
}

.submit-button{
  margin-top: 20px;
  margin-bottom: 20px;
.btn-custom{
  width: 100%;
  min-height: 64px;
  font-size: 16px;
}
}

.create-account{
  text-align: center;
.custom-link{
  font-size: 16px !important;
  color: $linkColor;
}
span{
  font-size: 16px;
  margin-left: 5px;
  color: $linkColor;
}
}
}
}
//end left section
}
}

</style>

<style lang="scss">
.login-page {
  input {
    background-color: #FAFBFC !important;
    padding: 0px !important;
    padding-right: 20px !important;
    opacity: 0.5;
    color: #385B72 !important;
    font-size: 17px !important;
    border-radius: 8px !important;
    overflow: hidden !important;
  }

  ::placeholder {
    font-size: 15px;
  }

  input:focus {
    border-radius: 8px;
  }

  .v-field__overlay {
    border: 1px solid #8692A6;
    border-radius: 8px;
  }

  .v-field__field {
    border: 1px solid #8692A6;
    border-radius: 8px;
  }

  .v-field__input {
    opacity: .8;
    border: none;
    min-height: 48px;
  }

  //.v-field__outline {
  //  display: none;
  //}
  .group-field{
    position: relative !important;
  }
  .v-input__append{
    position: absolute;
    left: 3%;
    top:50%;
    transform: translateY(-50%);
    font-size: 15px;
  }
  .v-messages__message{
    font-size: 16px !important;
    margin-bottom: 10px;
  }
}

</style>

