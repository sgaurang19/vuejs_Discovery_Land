import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src

import './Home.scss'
@Options({
  components: {
    Header, Footer
  },
})
export default class Home extends Vue {}