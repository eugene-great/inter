<template>

  <h1>Enter CSV</h1>

  <div class="mb-3">
    <textarea v-model="inputCSV" class="form-control" rows="10"></textarea>
  </div>

  <div class="d-grid d-md-block">
    <button @click="importCSV(false)" type="button" class="btn btn-lg btn-primary">Add</button>&nbsp;
    <button @click="importCSV" type="button" class="btn btn-lg btn-primary">Replace</button>
  </div>

</template>

<script>

import dataMixin from '@/mixins/data'

export default {
  name: 'ImportView',
  data() {
    return {
      inputCSV: '',
    }
  },
  mixins: [dataMixin],
}

</script>
