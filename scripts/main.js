$(document).ready( function () {

var itemImage, itemTitle, itemSeller, itemPrice, itemPost;

cameras.forEach( function (item){
    itemImage = '<img src="' +item.url_570xn + '">';
    itemTitle = '<p>' + item.title + '</p>';
    itemSeller ='<p>' + item.shop_name + '</p>';
    itemPrice ='<p>' + '$' + item.Price + ' ' + 'USD';
    itemPost = '<li>' + itemImage + itemTitle + itemSeller + itemPrice + '</li>';

$('#listing').append(item);

})







});
