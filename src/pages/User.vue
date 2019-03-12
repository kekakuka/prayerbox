<template>
  <div>
    <q-page>
      <q-list highlight inset-separator>
        <q-list-header>My Prayers (Answered or Canceled)</q-list-header>

        <!-- {{prayers}} -->
        <q-item
          v-for="prayer in prayers" :key="prayer.id"
          >
          <q-item-side
          >
          <!-- avatar="assets/boy-avatar.png" -->
            {{prayer.index}}
          </q-item-side>

            <q-item-main
              :label="prayer.title"
              label-lines="1"
              :sublabel="prayer.description"
              sublabel-lines="2"
              />

          <q-item-side right :stamp="prayer.end_at | moment('DD-MM-YYYY')" />
        </q-item>
      </q-list>

    </q-page>
  </div>
</template>
<style>
</style>

<script>
import {idb} from 'plugins/vueidb'

export default {
  name: 'user',
  data () {
    return {
      prayers: [],
      l: null
    }
  },
  methods: {
    navCreate () {
      this.$router.push({
        path: '/form'
      })
    },
    getAllPrayers () {
      for (var i = 0; i < this.l; i++) {
        console.log(i)
        this.prayers[i].index = i + 1
      }
    }
  },
  mounted () {
    // this.$axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => (this.prayers = response))
    console.log(this.$q.localStorage)
    console.log(this.$q.localStorage.get.length())
    console.log(this.$q.localStorage.get.all())
    console.log(this.$q.localStorage.get.item(2))

    // this.prayers = samplePrayers
    // this.prayers = []

    console.log(idb.db.prayer.reverse())
    idb.db.prayer.orderBy('end_at').reverse().filter(
      r => {
        return r
      }
    ).toArray().then(
      results => {
        this.prayers = results
        this.l = results.length
        console.log(results)
        this.getAllPrayers()
      }
    )
  }
}
</script>
