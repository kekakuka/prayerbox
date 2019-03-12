<template>
  <q-page padding>

    <q-input
      type="textarea"
      float-label="Prayer details"
      :max-height="100"
      rows="5"
      v-model="form.description"

    />

    <q-datetime
      type="date"
      v-model="form.end_date"

       />
    <br/>
    <q-btn
      color="primary"
      @click="submit">
      Save
    </q-btn>
  </q-page>
</template>

<script>
import { LocalStorage } from 'quasar'
// import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CreatePage',
  data () {
    return {
      form: {

        title: null,
        end_date: null,
        description: null
      }
    }
  },
  validations: {
    form: {
      // title: { required }
    }
  },
  methods: {
    getObject () {

    },
    store () {
      LocalStorage.set(1, 1)
    },
    submit () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
        console.log('there is errors')
        return ''
      }
      console.log('store successfully')
    }
  }
}
</script>

<style>
</style>
