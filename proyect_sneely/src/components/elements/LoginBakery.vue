<template>
    <div>
        <form action="">
            <label class="text-light" for="">Path:</label>
            <input type="text" id="name" v-model="path" />
        </form>
        <p class="text-light">{{ path }}</p>
        <h3 class="text-light">sp:{{ getTranslatedText(spanish, path) }}</h3>
        <h3 class="text-light">en:{{ getTranslatedText(english, path) }}</h3>
        <h3 class="text-light">fr:{{ getTranslatedText(french, path) }}</h3>
        <h3 class="text-light">pt:{{ getTranslatedText(portuguese, path) }}</h3>
        <h3 class="text-light">de:{{ getTranslatedText(deusch, path) }}</h3>
        <h3 class="text-light">pl:{{ getTranslatedText(polish, path) }}</h3>


    </div>
</template>

<script>
import esp from '../../assets/i18n/es/common.json'
import eng from '../../assets/i18n/en/common.json'
import fra from '../../assets/i18n/fr/common.json'
import pol from '../../assets/i18n/pl/common.json'
import deu from '../../assets/i18n/de/common.json'
import port from '../../assets/i18n/pt/common.json'


export default {
    name: 'LoginBakery',
    props: {

    },

    data() {
        return {
            spanish: [],
            english: [],
            french: [],
            portuguese: [],
            polish: [],
            deusch: [],
            path: "",

        }
    },
    created() {
        this.spanish = esp;
        this.english = eng;
        this.french = fra;
        this.portuguese = port;
        this.polish = pol;
        this.deusch = deu;
    },
    methods: {
        getTranslatedText(obj, path) {
            const segments = path.split('.');
            let value = obj;
            for (const segment of segments) {
                if (segment in value) {
                    value = value[segment];
                } else {
                    return '';
                }
            }
            return value;
        }
    }
}

</script>

<style scoped></style>