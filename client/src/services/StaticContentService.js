import Api from '@/services/Api'

export default {
  getPoem (poemId) {
    return Api().get('get-poem.php', {
      params: {
        poemId: poemId
      }})
  }
}
