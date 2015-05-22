$(document).ready( function () {

var itemImage, itemTitle, itemSeller, itemPrice, itemPost;

stuff.results.forEach( function (item){
    itemImage = '<img src="' + item.Images[0].url_170x135 + '">';
    itemTitle = '<p class="title">' + item.title + '</p>';
    itemSeller ='<p class="seller">' + item.Shop.shop_name + '</p>';
    itemPrice ='<p class="price">' + '$' + item.price + ' ' + 'USD';
    itemPost = '<li>' + itemImage + itemTitle + itemSeller + itemPrice + '</li>';

$('.listing').append(itemPost);

});



var categoryListing;

stuff.results.forEach ( function (list){
    categoryListing = '<li><a href="#">' + list.taxonomy_path + '</a></li>';

$('.sidebar').append(categoryListing).sort();

});

});
