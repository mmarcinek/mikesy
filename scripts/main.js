var itemImage, itemTitle, itemSeller, itemPrice, itemPost, itemFavorite;

stuff.results.forEach( function (item){
    itemImage = '<a href="' + item.url + '"><img src="' + item.Images[0].url_170x135 + '"></a>';
    itemFavorite= '<a href="#" class="pop-up">' + '<div class="heart"><img src="images/heart.png"></div>' +
                      '<div class="hamburger"><img src="images/hamburger.png"></div>' + '</a>';
    itemTitle = '<p class="title"><a href="' + item.url + '">' + item.title + '</a></p>';
    itemSeller ='<p class="seller"><a href="' + item.Shop.url + '">' + item.Shop.shop_name + '</a></p>';
    itemPrice ='<p class="price">' + '$' + item.price + ' ' + 'USD' + '</p>';
    itemPost = '<li>' + itemImage + itemFavorite + itemTitle + itemSeller + itemPrice + '</li>';

$('.listing').append(itemPost);

});

var sidebar = stuff.results.map (function (item){

  if (item.taxonomy_path !== null)
    {return item.taxonomy_path;}
  else
    {return [];}
});

var sidebarItems = [];

  sidebar.forEach (function(lists){
  lists.forEach(function (x){
    if(sidebarItems.indexOf(x) === -1)
      sidebarItems.push(x);
  });
});


var category = $('.sidebar');

sidebarItems.forEach ( function (sbItem){
  category.append('<li><a href="#">' + sbItem + '</a></li>');
});


var allCategories = $('.criteria');

allCategories = ' ' + '\x22' + stuff.search + '\x22' + '<span>' + ' (' + stuff.count + ' results' + ')' + '</span>';

$('.criteria').append(allCategories);




// $('.fm1').on('click', function(){
//   $('.fm1').removeId('.fm1-check');
//   $(this).addId('.fm1-checked');
// });



