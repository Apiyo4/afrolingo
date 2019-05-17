$(document).ready(function () {
    $(".my-2.my-lg-0").submit(function (e) {
        e.preventDefault();
        $(".begin").hide();
        $('.returnhome').show()
        $('.coverpage').hide();
        $('.homepagefooter').hide();
        $(".overflow").show();
        $('.footerlanguages').show();
    })

    $(".btn.btn-outline-primary.my-2.my-sm-0.submit").on('click', function (e) {
        e.preventDefault();
        var email = $(".form-control.mr-sm-2.email").val();
        alert(`${email}  has subscribed successfully.`);
    });
})
