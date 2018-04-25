<template>
  <div>
    <say></say>
    <div @click="alertMsg">hellofdsa</div>
  </div>
</template>
<script>
import Say from './say';
export default {
  name: 'hello',
  components: {Say},
  methods: {
    alertMsg() {
      console.log('aa');
    }
  }
};
</script>
