'use strict'

const model = {
  random: function () {
    return Math.floor((Math.random() * 6) + 1)
  }
}

const view = {
  updateNumber: function (k, die) {
    $(die).text(model.random())
  }
}

const controller = {
  add: function () {
    $('.dice').append('<div class="die">0</div>')
  },
  roll: function () {
    $('.die').each(view.updateNumber)
  },
  onClick: function () {
    $('#roller button.add').on('click', controller.add)
    $('#roller button.roll').on('click', controller.roll)
  }
}

$(document).ready(controller.onClick)
