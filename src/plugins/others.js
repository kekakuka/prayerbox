import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

export default ({ Vue }) => {
  Vue.use(VueMoment, {
    moment
  })
}
