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

// $('.sidebar').append(categoryListing);

$('.sidebar').sort(function (categoryListing) {
   if(a.categoryListing == b.categoryListing){
    return a.categoryListing;} else {
    return a.categoryListing && b.categoryListing;}
   }).append(categoryListing);


});

});

// sort( function (x,y) {
//    var x = results[0].taxonomy_path[0];
//    var y = results[1].taxonomy_path[1];
//    if(x === y) {
//     return x;} else {
//     return x && y;} });
