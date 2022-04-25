<template>

  <div class="question">
    <h1 class="mb-4">{{ question }}</h1>
    <TextLine v-for="(line, index) in answer" :text="line" :key="index + line.length" />
  </div>

  <button @click="next" type="button" class="btn btn-primary">Next</button>
</template>

<script>

import TextLine from "@/components/TextLine";
import dataMixin from '@/mixins/data'

export default {
  name: 'QuestionsView',
  mixins: [dataMixin],
  components: {TextLine},
  data() {
    return {
      number: 0,
    }
  },
  created() {
    this.next();
  },
  computed: {
    question() {
      return Object.keys(this.questions)[this.number]
    },
    answer() {
      return this.questions[this.question]
    }
  },
  methods: {
    next() {
      const newNumber = this.randomInteger(0, this.questionsCount - 1);
      if (this.number !== newNumber) {
        this.number = newNumber;
      } else {
        this.next();
      }
    }
  }
}

</script>
