var itemImage, itemTitle, itemSeller, itemPrice, itemPost;

stuff.results.forEach( function (item){
    itemImage = '<a href="#"><img src="' + item.Images[0].url_170x135 + '"></a>';
    itemTitle = '<p class="title"><a href="#">' + item.title + '</a></p>';
    itemSeller ='<p class="seller"><a href="#">' + item.Shop.shop_name + '</a></p>';
    itemPrice ='<p class="price">' + '$' + item.price + ' ' + 'USD' + '</p>';
    itemPost = '<li>' + itemImage + itemTitle + itemSeller + itemPrice + '</li>';

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




