// //This line adds an event listener to the document 
// that waits for the DOM to be fully loaded before executing the function. 
// This ensures that all HTML elements are available for manipulation.

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.cssText = 'margin:0;padding:0;text-decoration:none';



    // Create elements
    const section = document.createElement('section');
    section.style.cssText = "height: 90vh;justify-content: center;align-items: center;text-decoration: none !important;"
    section.className = 'child1';
    //     Creates a <section> element and assigns it the class child1.

    // Navigation Bar
    const nav = document.createElement('nav');
    nav.style.cssText=" width: 100%;height: 80px; background-color: #494643;line-height: 80px;padding: 0px 70px;position: fixed;"

    //     Creates a <nav> element.

    // Brand Section

    const brandDiv = document.createElement('div');
    brandDiv.style="  font-size: 30px; font-weight: 800; letter-spacing: 1.5px;"
    brandDiv.className = 'brand';
    const brandP = document.createElement('p');
    brandP.style=" float: left; color:bisque; text-transform:uppercase; margin-top:5px "
    brandP.textContent = 'Welcome to Cake Town';
    brandDiv.appendChild(brandP);
    // Creates a <div> with the class brand and a <p> element inside it with the text “Welcome to Cake Town”.

    // Unordered List and Search Input

    const ul = document.createElement('ul');
    ul.style="display:flex;margin-left:140px;margin-top:10px"

    const searchInput = document.createElement('input');
    searchInput.className = 'search';
    searchInput.type = 'text';
    searchInput.placeholder = 'Search..';
    searchInput.style="width:200px;height:5px;text-align: center;padding: 15px 30px;border-radius: 15px;margin-right: 250px; margin-top:15px"
    ul.appendChild(searchInput);
    //     Creates an <ul> element and an <input> element for the search bar, then appends the input to the list.

    // List Items and Links

    const liSearch = document.createElement('li');
    liSearch.style=" list-style: none;display: inline-block;margin-top:10px"
    const aSearch = document.createElement('a');
    aSearch.style="list-style: none;display: inline-block;margin-top:10px"
    aSearch.href = '#';
    const iconSearch = document.createElement('i');
    iconSearch.id = 'icon-search';
    iconSearch.className = 'fa fas fa-search';
    aSearch.appendChild(iconSearch);
    liSearch.appendChild(aSearch);
    ul.appendChild(liSearch);
    //     Creates a list item with a link containing a search icon.

    // Home Link

    const liHome = document.createElement('li');
    liHome.style="list-style:none; margin-top:20px display: inline-block; margin-left:-140px;font-size:20px;margin-top:-5px;text-decoration: none;color:bisque"
    const aHome = document.createElement('a');
    aHome.style="list-style:none;display: inline-block;text-decoration:none;color:bisque"
    aHome.href = '#';
    aHome.textContent = 'Home';
    liHome.appendChild(aHome);
    ul.appendChild(liHome);
    
    //     Creates a list item with a link to “Home”.

    // Order History Dropdown

    const liOrderHistory = document.createElement('li');
    liOrderHistory.style=" list-style: none;display:inline-block;padding: 0px 0px;margin-left:60px;font-size:20px;margin-top:-5px;"
   

    const aOrderHistory = document.createElement('a');
    aOrderHistory.style="list-style: none;text-decoration:none;color:bisque"
    aOrderHistory.href = '#';
    aOrderHistory.textContent = 'Order History';
    liOrderHistory.appendChild(aOrderHistory);

    const ulOrderHistoryDropdown = document.createElement('ul');
    ulOrderHistoryDropdown.style="list-style:none;text-decoration:none;margin-left:10px"
    ulOrderHistoryDropdown.className = 'dropdown';
    ['Order1', 'Order2', 'Order3'].forEach(order => {
        const liOrder = document.createElement('li');
        const aOrder = document.createElement('a');
        aOrder.style="text-decoration:none;"
        aOrder.href = '#';
        aOrder.textContent = order;
        liOrder.appendChild(aOrder);
        ulOrderHistoryDropdown.appendChild(liOrder);
    });
    liOrderHistory.appendChild(ulOrderHistoryDropdown);
    ul.appendChild(liOrderHistory);
    //     Creates a dropdown menu for “Order History” with three items: “Order1”, “Order2”, and “Order3”.

    // Menu Dropdown

    const liMenu = document.createElement('li');
    liMenu.style="list-style:none;display: inline-block;margin-left:60px;font-size:20px;margin-top:-5px;text-decoration: none;"
    const aMenu = document.createElement('a');
    aMenu.style="text-decoration:none;color:bisque;"
    aMenu.href = '#';
    aMenu.textContent = 'Menu';
    liMenu.appendChild(aMenu);

    const ulMenuDropdown = document.createElement('ul');
    ulMenuDropdown.style="margin-left:-40px;"
    ulMenuDropdown.className = 'dropdown';
    ['Vanilla', 'Strawberry', 'Pineapple'].forEach(flavor => {
        const liFlavor = document.createElement('li');
        liFlavor.style="list-style:none;text-decoration:none;"
        const aFlavor = document.createElement('a');
        aFlavor.style="text-decoration:none;"

        aFlavor.href = '#';
        aFlavor.textContent = flavor;
        liFlavor.appendChild(aFlavor);
        ulMenuDropdown.appendChild(liFlavor);
    });
    liMenu.appendChild(ulMenuDropdown);
    ul.appendChild(liMenu);
    //     Creates a dropdown menu for “Menu” with three items: “Vanilla”, “Strawberry”, and “Pineapple”.

    // Cart Link and Icon

    const liCart = document.createElement('li');
    liCart.style=" list-style:none; display:inline-block; font-size:20px; margin-top:-5px; text-decoration: none;"
    const aCart = document.createElement('a');
    aCart.style="text-decoration:none;color:bisque"
    aCart.href = '#';
    aCart.textContent = 'Cart';
    liCart.appendChild(aCart);
    ul.appendChild(liCart);

    const liCartIcon = document.createElement('li');
    const aCartIcon = document.createElement('a');

    aCartIcon.href = '#';
    const iconCart = document.createElement('i');
    iconCart.id = 'cart';
    iconCart.className = 'fa fas fa-shopping-cart';
    aCartIcon.appendChild(iconCart);
    liCartIcon.appendChild(aCartIcon);
    ul.appendChild(liCartIcon);
    //     Creates a list item with a link to “Cart” and another list item with a shopping cart icon.

    // Appending Navigation to Section

    nav.appendChild(brandDiv);

    nav.appendChild(ul);
    section.appendChild(nav);
    section.style=" height: 90vh;justify-content: center;align-items: center;scroll-snap-align: start;"


    //     Appends the brand div and the unordered list to the navigation, then appends the navigation to the section.

    // Video Section

    const videoDiv = document.createElement('div');
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.id = 'myVideo';
    const source = document.createElement('source');
    source.src = 'video cake/video2.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    videoDiv.appendChild(video);
    //     Creates a video element with autoplay, muted, and loop attributes, and appends a source element to it.

    // Header Text

    const headerTextDiv = document.createElement('div');

    headerTextDiv.className = 'header-text';
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Hello!!!!!!!!!!<span> We make your special day happy and Joy Full</span><span>remembrance ever </span>';
    headerTextDiv.appendChild(h1);
    videoDiv.appendChild(headerTextDiv);
    //     Creates a div with class header-text and an h1 element containing the header text.

    // Appending Video Section to Section

    section.appendChild(videoDiv);
    //     Appends the video section to the main section.

    // Appending Section to Body

    document.body.appendChild(section);
    //     Appends the entire section to the body of the document.

    // Loading External Script

    // Load external script
    const script = document.createElement('script');
    script.src = 'header.js';
    document.body.appendChild(script);
});
