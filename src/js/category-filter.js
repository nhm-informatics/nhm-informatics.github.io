/**
 * Created by bens3 on 23/11/15.
 */

/**
 * Created by bens3 on 07/11/15.
 */

var categoriesFilter = {

    init: function () {
        var $select = $('#category-filter select')
        var category = this.getParameterByName('category')
        // If we have a category set in the URL, apply it
        if(category){
            categoriesFilter.applyFilter(category)
            $select.val(category)
        }
        // If user changes the filter, apply changes
        $select.change(function () {
            categoriesFilter.applyFilter(this.value)
        })
    },

    applyFilter: function (value) {
        var postItems = $('.post-list-item')

        if(value){
            if(postItems.hasClass(value))
        }else{
            postItems.show()
        }
    },


    getParameterByName: function (name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }




};

$(document).ready(function () {
    categoriesFilter.init();
});