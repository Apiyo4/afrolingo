$(document).ready(function () {
    $("button.btn.btn-outline-light.my-2.my-sm-0.begin").submit(function (e) {
        e.preventDefault();
        $(".form-inline.my-2.my-lg-0.begin").hide();
        $('.btn.btn-primary.returnhome').show()
        $('.coverpage').hide();
        $('footer.homepagefooter').hide();
        $(".container-fluid.overflow").show();
        $('.footerlanguages').show();
    })

    $(".btn.btn-outline-primary.my-2.my-sm-0.submit").on('click', function (e) {
        e.preventDefault();
        var email = $(".form-control.mr-sm-2.email").val();
        alert(`${email}  has subscribed successfully.`);
    });
})
