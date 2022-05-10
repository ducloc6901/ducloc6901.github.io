$(document).ready(function() {
    new RGraph.Sheets('123Q32yvOl994TJwTrDaYLcTUBeXfSCgIOybNkkcqoSk', function(sheet) {
        $(".up-b14").html(sheet.get('B14'))
        $(".up-c14").html(sheet.get('C14'))
        $(".up-b15").html(sheet.get('b15'))
        $(".up-b16").html(sheet.get('b16'))

        //Phan 3_2
        $(".up-c27").html(sheet.get('c27'))

        //phan 5
        //số khách hàng hiển thị
        totalcustomer = sheet.get('d44')
        line = 46
        item = ''
        for (i = 0; i < totalcustomer; i++) {
            realline = line + i
            item += '<div class="item ' + realline + '">'
            item += '<div class="testimony-wrap text-center py-4 pb-5">'
            item += '	<a style="color: #fff" title="Liên kết tới Facebook" href="' + sheet.get('e' + realline) + '" target="_blank"><div class="user-img" style="background-image: url(\'' + sheet.get('d' + realline) + '\')">'
            item += '		<span class="quote d-flex align-items-center justify-content-center">'
            item += '			<i class="icon-facebook"></i>'
            item += '		</span>'
            item += '	</div></a>'
            item += '	<div class="text px-4">'
            item += '		<p class="mb-4">' + sheet.get('b' + realline) + '</p>'
            item += '		<p class="name"><a  title="Liên kết tới Facebook" style="color: #fff" href="' + sheet.get('e' + realline) + '" target="_blank">' + sheet.get('c' + realline) + '</a></p>'
            item += '		<span class="position"><a  style="color: #fff" href="' + sheet.get('e' + realline) + '" target="_blank">Facebook</a></span>'
            item += '	</div>'
            item += '</div>'
            item += '</div>'

        }
        $('.up-p5').html(item)
        $('.carousel-testimony').owlCarousel({
            autoplay: true,
            autoHeight: true,
            center: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: false,
            dots: true,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        // phan 6
        $(".up-doingu-title h2").html(sheet.get('b56'))
        $(".up-doingu-title p").html(sheet.get('b57'))
        item_doingu = ''
        for (i = 59; i < 63; i++) {
            item_doingu += '<div class="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">'
            item_doingu += '<div class="staff">'
            item_doingu += '    <div class="img-wrap d-flex align-items-stretch">'
            item_doingu += '        <div class="img align-self-stretch" style="background-image: url(' + sheet.get('e' + i) + ');"></div>'
            item_doingu += '    </div>'
            item_doingu += '    <div class="text pt-3 text-center">'
            item_doingu += '        <span class="position mb-2">' + sheet.get('b' + i) + '</span>'
            item_doingu += '        <h3 class="mb-2">' + sheet.get('c' + i) + '</h3>'
            item_doingu += '        <div class="faded pb-1">'
            item_doingu += '            <p>' + sheet.get('d' + i) + '</p>'
            item_doingu += '        </div>'
            item_doingu += '    </div>'
            item_doingu += '</div>'
            item_doingu += '</div>'
        }
        $(".up-doingu-rows").html(item_doingu)
    });
});