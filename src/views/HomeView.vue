<template>
  <div>
      <v-form>
        <v-container fluid>
          <v-row>

              <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>




          </v-row>
        </v-container>
      </v-form>
  </div>
</template>

<script>
import {defineComponent} from 'vue';


export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },

  components: {},
});
</script>
