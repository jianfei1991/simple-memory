
$.ajax({
  url: 'https://testing.yongche.org/ajax/get_ecosphere_list.php',
  type: 'GET',
  dataType: 'jsonp',
  jsonp:'jsonp_callback',
  data: {key: '5wue721bo0g40w8s',issendto: 'cellphone',cellphone: 15010195133},
  success: function(res){
  	console.log(res)
  }
})