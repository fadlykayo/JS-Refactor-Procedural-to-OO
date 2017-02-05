'use strict'

const controller = {
  add: function () {
    $('.dice').append('<div class="die">0</div>')
  },
  roll: function () {
    $('.die').each(view.updateNumber)
  }
}

const model = {
  random: function () {
    let value = Math.floor((Math.random() * 6) + 1)
    return value
  }
}

const view = {
  updateNumber: function (k, die) {
    $(die).text(model.random())
  }
}

$(document).ready(function () {
  $('#roller button.add').on('click', controller.add)
  $('#roller button.roll').on('click', controller.roll)
})
