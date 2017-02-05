'use strict'

const controller = {
  add: function () {
    console.log('WAT')
    $('.dice').append('<div class="die">0</div>')
  },
  roll: function () {
    $('.die').each(function (k, die) {
      $(die).text(model.randomVal())
    })
  }
}

const model = {
  randomVal: function () {
    var value = Math.floor((Math.random() * 6) + 1)
    return value
  }
}

$(document).ready(function () {
  $('#roller button.add').on('click', controller.add)
  $('#roller button.roll').on('click', controller.roll)
})

// $(document).ready(function () {
//   $('#roller button.add').on('click', function () {
//     console.log('WAT')
//     $('.dice').append('<div class="die">0</div>')
//   })
//   $('#roller button.roll').on('click', function () {
//     $('.die').each(function (k, die) {
//       var value = Math.floor((Math.random() * 6) + 1)
//       $(die).text(value)
//     })
//   })
// })
