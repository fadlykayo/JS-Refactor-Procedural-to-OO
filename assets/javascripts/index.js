'use strict'

const controller = {
  add: function () {
    $('.dice').append('<div class="die">0</div>')
  },
  roll: function () {
    $('.die').each(function (k, die) {

    })
  }
}

const model = {
  random: function () {
    let value = Math.floor((Math.random() * 6) + 1)
    return value
  }
}

const view = {
  addNumber: function (die) {
    $(die).text(model.random())
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
