<template>
  <q-page padding>
    <!-- content -->
    <!-- {{ $route.params.id }}-->
    <!-- {{i}} -->

    <q-card inline style="width: 100%">
      <q-card-media>
        <!-- <img src="~assets/boy-avatar.png"> -->
      </q-card-media>
      <q-card-title>
        {{prayer.title}}
        <!-- <q-rating slot="subtitle" v-model="stars" :max="5" /> -->
        <!-- <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
        </div> -->
      </q-card-title>
  <q-card-main>
    <!-- <p>$・Italian, Cafe</p> -->
    <p class="text-faded">
      {{prayer.description}}
    </p>
  </q-card-main>
  <q-card-separator />
  <q-card-actions>
    <q-btn flat round dense icon="event" />
    <q-btn flat :label="prayer.end_at | moment('DD-MM-YYYY')" />

    <q-btn flat color="primary" label="Cancel"
    @click="cancel()" />
    <q-btn flat right color="primary" label="Prayer Answered"
    @click="answered()" />
  </q-card-actions>

</q-card>
  </q-page>
</template>

<script>
import {idb} from 'plugins/vueidb'
export default {
  name: 'DetailPage',
  data () {
    return {
      i: null,
      prayer: null
    }
  },
  created () {
    console.log('creating')
  },
  methods: {
    cancel () {
      idb.db.prayer.update(this.i, {
        canceled: true
      }).then(
        updated => {
          if (updated) {
            console.log('update ' + this.i)
          } else {
            console.log('Nothing was updated - there were no ' + this.i)
          }
        }
      )
      this.goBack()
    },
    answered () {
      idb.db.prayer.update(this.i, {
        answered: true
      }).then(
        updated => {
          if (updated) {
            console.log('update ' + this.i)
          } else {
            console.log('Nothing was updated - there were no ' + this.i)
          }
        }
      )
      this.goBack()
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.i = parseInt(id)

    console.log(id)
    // this.prayer = this.$q.localStorage.get.item(this.$route.params.id)
    idb.db.prayer.get(
      this.i
    ).then(
      result => {
        console.log(result)
        this.prayer = result
      }
    ).catch(
      error => console.log(error)
    )

    // console.log('mounting' + this.prayer)

    // var d = new Date(this.prayer.end_date)
    // this.end_date = d.toLocaleDateString()
  }
}
</script>

<style>
</style>
