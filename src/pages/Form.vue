<template>
  <q-page padding>
    <q-input
      v-model="form.title"
      float-label="Prayer"
      @blur="$v.form.title.$touch"
      @keyup.enter="submit"
      :error="$v.form.title.$error"
    />

    <q-input
      type="textarea"
      float-label="Prayer details"
      :max-height="100"
      rows="5"
      v-model="form.description"
    />

    <q-datetime
      type="date"
      float-label="End Date"
      v-model="form.end_at"
       />
    <br>
    <q-btn color="primary" @click="submit">Store</q-btn>
  </q-page>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import {idb} from '../plugins/vueidb'

// using index db dexie
// https://www.npmjs.com/package/vue-idb
// http://dexie.org/docs/Tutorial/Best-Practices

export default {
  data () {
    return {
      form: {
        title: '',
        end_at: null,
        description: null
      },
      prayer: null
    }
  },
  validations: {
    form: {
      title: { required }
    }
  },
  mounted () {
    // console.log(this.$q.localStorage)
    // console.log(this.$q.localStorage.get.length())
  },
  methods: {
    getObject () {
      this.prayer = {
        'title': this.form.title,
        'description': this.form.description,
        'end_at': this.form.end_at,
        'enabled': true,
        'answered': false,
        'canceled': false
      }
    },
    store () {
      this.$q.localStorage.set(1, 1)
    },
    submit () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
        console.log('there is errors')
        return null
      } else {
        // this.getObject()
        idb.db.prayer.add({
          title: this.form.title,
          description: this.form.description,
          end_at: new Date(this.form.end_at),
          created_at: new Date(),
          updated_at: new Date(),
          canceled: false,
          enabled: true,
          answered: false
        }).then(
          r => console.log(r)
        ).catch(
          error => console.log(error)
        )

        console.log('store successfully')
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>
