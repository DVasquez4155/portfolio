
var container = $("#sites");
var site = {
    2016 : ['Portfolio-V1','Portfolio-V2', 'Humanity-Helping-Homeless'],
    2020 : ["Password-Generator","Code-Quiz","Day-Planner", "Weather-Dashboard", "Precious-Metals-Calculator"]
};
Object.keys(site).forEach(
    function(currentSite){
        var yearSites = site[currentSite];
            console.log(site[currentSite])
            portfolioEntries(currentSite, site[currentSite])
        })
function portfolioEntries(year, entires) {
    container.append('<h1 class="row">' + year + '</h1>')
    var numberOfSites = entires.length;
    var divContainer;
    
    var mainContainer = document.createElement('div');
        $(mainContainer).addClass('row');
        $(container).append(mainContainer);

    entires.forEach(function(site) {
        var siteName = site.split('-').join(' ');
        divContainer = document.createElement('div');
        $(divContainer).addClass("col-md-6 col-lg-4");

        $(divContainer).appendTo(mainContainer);

        var cardContainer = document.createElement('div');
        $(cardContainer).addClass('card border-0');
        $(cardContainer).appendTo(divContainer);
        var cardBody = document.createElement('div');
        $(cardBody).addClass('card-body');
        var link = document.createElement('a');
        $(link).attr('href', 'https://dvasquez4155.github.io/' + site)
        $(link).appendTo(cardContainer);

        var imgContainer = document.createElement('img');
        
        $(imgContainer)
        .addClass('card-img-top scale-on-hover')
        .attr("src", "assets/img/blank.png")
        .attr("alt", siteName);
        var img = new Image;
        var imgSrc = "https://dvasquez4155.github.io/" + site + "/assets/images/icon.png";
        img.src = imgSrc;
        $(imgContainer).appendTo(link);
        img.onload = function() {
            imgContainer.src = this.src;
        }
        img.onerror = function() {
            $(cardContainer).append('<div style="position: absolute; top: 45%;  width: 100%; text-align: center;><span class="dark">'+ siteName +'</span></div>')
        }

        $(cardContainer).append(cardBody);
        var cardText = document.createElement('p');
        $(cardText)
        .addClass('card-text')
        .html(siteName);
        $(cardBody).append(cardText);
        var buttonGroup = document.createElement('div');
        $(buttonGroup).addClass('d-flex justify-content-between align-items-center btn-group')
        $(cardBody).append(buttonGroup);
        var btn = document.createElement('a');
        $(btn)
        .addClass('col btn btn-sm btn-outline-secondary')
        .attr('type', 'button')
        .attr('href', 'https://dvasquez4155.github.io/' + site)
        .html('View');
        $(buttonGroup).append(btn);

        var git = document.createElement('a');
        $(git)
        .addClass('col btn btn-sm btn-outline-secondary')
        .attr('type', 'button')
        .attr('href', 'https://github.com/DVasquez4155/' + site)
        .html('View on GitHub');
        $(buttonGroup).append(git);

});
}