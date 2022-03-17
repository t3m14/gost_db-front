'use strict'

const { ipcRenderer } = require('electron')

document.getElementById('confirm-button').onclick = function(){

    let form = document.getElementById('main_form');
    // type number name spheres keywords oks accepted_body accepted_date confirm_date
    const type = document.getElementById('type');
    const number = document.getElementById('number');
    const name = document.getElementById('name_textarea');
    const spheres = document.getElementById('spheres_textarea');
    const keywords = document.getElementById('keywords_textarea');
    const oks = document.getElementById('oks_textarea');
    const accepted_body = document.getElementById('accepted_body_textarea');
    const accepted_date = document.getElementById('accepted_date');
    const confirm_date = document.getElementById('confirm_date');
    let  data = {
      type: type.value,
      number: number.value,
      name: name.value,
      spheres: spheres.value,
      keywords: keywords.value,
      oks: oks.value,
      accepted_body: accepted_body.value,
      accepted_date: accepted_date.value,
      confirm_date: confirm_date.value,
    }
    console.log(data)
}