$(function () {
    $('#form input[type!=submit]').keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault()
            $(this).parent().next().find('input').focus()
            return false
        }
    })

})