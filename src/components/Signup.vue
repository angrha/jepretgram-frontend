<template>
  <div class="container col-md-4">
    <div>
      <div class="form-group">
        <label for="exampleInputEmail1" class="lbl">Email address</label>
        <input v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="lbl">Password</label>
        <input v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" type="password">
      </div>
      <button @click="signup" type="button" class="btn btn-success rgt">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      axios.post('http://localhost:3000/api/users/signup', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log(response)
          this.$router.push({name: 'home'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
