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
      <button type="button" class="btn btn-info rgt">Sign up</button>
      <button @click="signin" type="button" class="btn btn-success rgt">Login</button>
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
    signin () {
      axios.post('http://localhost:3000/api/users/signin', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          localStorage.setItem('authLogin', response.data.token)
          this.email = ''
          this.password = ''
          this.$emit('navigasi-login', true)
          // this.$router.push({name: 'Dashboard'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.lbl {
  float: left;
}
.container {
  margin-top: 5%;
}
.ctr {
  margin: auto;
}
.rgt {
  float: right;
  margin: 0% 1%;
}
</style>
