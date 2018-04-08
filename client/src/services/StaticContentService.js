import Api from '@/services/Api'

// const poemDetail = { id: '2_1',
//   audioUrl: 'http://www.allamaiqbal.com/works/poetry/ur/bal/audio/01-01.mp3',
//   heading:
//   [ { lang: 'ur', text: 'ميري نوائے شوق سے شور حريم ذات ميں' },
//     { lang: 'en',
//       text: 'A blaze is raging near His Throne, By my strains that burn like flames' } ]}

export default {
  register () {
    return Api().get('poems/2_1.yaml')
  },

  getPoem (poemId) {
    return Api().get('getPoem.php', {
      params: {
        poemId: poemId
      }})
  }
}
