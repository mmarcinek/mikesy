$(document).ready( function () {

var itemImage, itemTitle, itemSeller, itemPrice, itemPost;

stuff.results.forEach( function (item){
    itemImage = '<img src="' + item.Images[0].url_170x135 + '">';
    itemTitle = '<p>' + item.title + '</p>';
    itemSeller ='<p>' + item.Shop.shop_name + '</p>';
    itemPrice ='<p>' + '$' + item.price + ' ' + 'USD';
    itemPost = '<li>' + itemImage + itemTitle + itemSeller + itemPrice + '</li>';

$('.listing').append(itemPost);

});

});
