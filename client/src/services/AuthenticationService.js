import Api from '@/services/Api'

export default{
    register(credentials){
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
//   email: 'mawusseayite@gmail.com',
//   password: '12345678'
// })