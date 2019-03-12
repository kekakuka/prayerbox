<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"

        :inverted="$q.theme === 'ios'"
      >
              <!-- :glossy="$q.theme === 'mat'" -->
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Prayer Box
          <div slot="subtitle">
            <!-- Running on Quasar v{{ $q.version }} -->
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Your Personal Prayer Box</q-list-header>
        <q-item to="/#/">
          <q-item-side icon="home" />
          <q-item-main label="Prayers" sublabel="all prayers" />
        </q-item>

        <q-item to="/center">
          <q-item-side icon="account_circle" />
          <q-item-main label="Center" sublabel="my own dashboard and all prayer history" />
        </q-item>

      </q-list>
      <q-list
        link
        inset-delimiter
      >
        <q-list-header>Credits & Contribution</q-list-header>
        <q-item to="/credits">
          <q-item-side icon="face" />
          <q-item-main label="Credits" sublabel="Many thanks" />
        </q-item>

      </q-list>
      <q-list
        link
        inset-delimiter
      >

      <q-list-header>Relating Projects and Links</q-list-header>
      <q-item @click.native="openURL('https://immanuel.org.nz/')">
          <q-item-side icon="room" />
          <q-item-main label="Church" sublabel="immanuel.org.nz" />
        </q-item>
      <q-item>
        <q-item-side icon="opacity" />
        <q-item-main label="Ask" sublabel="Christian Exchange (coming soon)" />
      </q-item>
      <q-item>
          <q-item-side icon="thumb_up" />
          <q-item-main label="One Verse A Day" :sublabel="verse" />
        </q-item>
        </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { getVerseToday } from 'components/verse'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      verse: null
    }
  },
  methods: {
    openURL
  },
  mounted () {
    let verse = getVerseToday()
    this.verse = verse[0] + '     ' + '----' + verse[1]
    // console.log(this.verse)
  }
}
</script>

<style>
</style>
