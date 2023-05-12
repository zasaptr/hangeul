const express = require('express')
const routes = express.Router()

routes.get('/konsonandasar', (req, res) => {

    const data = [
        
        {
          id: 1,
          huruf: "ㄱ",
          nama: "G"
        },
        {
          id: 2,
          huruf: "ㄴ",
          nama: "N"
        },
        {
          id: 3,
          huruf: "ㄷ",
          nama: "D"
        },
        {
          id: 4,
          huruf: "ㄹ",
          nama: "R/L"
        },
        {
          id: 5,
          huruf: "ㅁ",
          nama: "M"
        },
        {
          id: 6,
          huruf: "ㅂ",
          nama: "B"
        },
        {
          id: 7,
          huruf: "ㅅ",
          nama: "S"
        },
        {
          id: 8,
          huruf: "ㅇ",
          nama: "NG"
        },
        {
          id: 9,
          huruf: "ㅈ",
          nama: "J"
        },
        {
          id: 10,
          huruf: "ㅊ",
          nama: "C"
        },
        {
          id: 11,
          huruf: "ㅋ",
          nama: "K"
        },
        {
          id: 12,
          huruf: "ㅌ",
          nama: "T"
        },
        {
          id: 13,
          huruf: "ㅍ",
          nama: "P"
        },
        {
          id: 14,
          huruf: "ㅎ",
          nama: "H"
        }
      ];
    

    res.json({
        berhasil: true,
        materi : 'Konsonan Dasar',
        data: data
    })
})

routes.get('/vokaldasar', (req, res) => {

    const data = [
        {
          id: 1,
          huruf: "ㅏ",
          nama: "a"
        },
        {
          id: 2,
          huruf: "ㅣ",
          nama: "i"
        },
        {
          id: 3,
          huruf: "ㅜ",
          nama: "u"
        },
        {
          id: 4,
          huruf: "ㅗ",
          nama: "o"
        },
        {
          id: 5,
          huruf: "ㅡ",
          nama: "eu"
        },
        {
          id: 6,
          huruf: "ㅓ",
          nama: "eo"
        }
      ];

    res.json({
        berhasil: true,
        materi : 'Vokal Dasar',
        data: data
    })
})

routes.get('/hurufvokalkombinasi', (req, res) => {

    const data = [
        {
          id: 1,
          huruf: "ㅑ",
          nama: "ya"
        },
        {
          id: 2,
          huruf: "ㅖ",
          nama: "ye"
        },
        {
          id: 3,
          huruf: "ㅛ",
          nama: "yo"
        },
        {
          id: 4,
          huruf: "ㅕ",
          nama: "yeo"
        },
        {
          id: 5,
          huruf: "ㅐ",
          nama: "ae"
        },
        {
          id: 6,
          huruf: "ㅠ",
          nama: "yu"
        }
      ];


    res.json({
        berhasil: true,
        materi : 'Huruf Vokal Kombinasi', 
        data: data
    })
})

routes.get('/konsonankeras', (req, res) => {

    const data = [
        {
          id: 1,
          huruf: "ㄲ",
          nama: "gg"
        },
        {
          id: 2,
          huruf: "ㄸ",
          nama: "dd"
        },
        {
          id: 3,
          huruf: "ㅉ",
          nama: "jj"
        },
        {
          id: 4,
          huruf: "ㅆ",
          nama: "ss"
        },
        {
          id: 5,
          huruf: "ㅃ",
          nama: "bb"
        }
      ];

    res.json({
        berhasil: true,
        materi : 'Konsonan Keras',
        data: data
    })
})

module.exports = routes