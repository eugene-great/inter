<template>
  <div class="question">
    <h1>Enter CSV</h1>

    <div class="mb-3">
      <textarea v-model="inputCSV" class="form-control" rows="10"></textarea>
    </div>
    <button @click="importCSV" type="button" class="btn btn-primary">Import</button>
  </div>

</template>

<script>

import dataMixin from '@/mixins/data'

export default {
  name: 'EditView',
  data() {
    return {
      inputCSV: '',
    }
  },
  mixins: [dataMixin],
}

</script>
