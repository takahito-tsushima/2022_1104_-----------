// alert("test")


// ----- register01 -----

//  出身地  国内→リスト  海外→テキスト

$(document).ready(function() {

    $(function() {
        $('[name="born-place"]:radio').change( function() {
          if($('[id=js_domestic]').prop('checked')){
            $('#js_born_overseas').hide();
            $('#js_born_domestic').show();
            } else if ($('[id=js_overseas]').prop('checked')) {
                $('#js_born_overseas').show();
                $('#js_born_domestic').hide();
            } 
    });
});


//   職業  詳細入力

    $(function() {
        $('#js-occupation').change( function() {
          if($('[id=js_business_person]').prop('selected')){
            $('#js_company_name').show();
            $('#js_business_name').hide();
            $('#js_school_name').hide();
        } else if ($('[id=js_part_timer]').prop('selected')) {
            $('#js_company_name').show();
            $('#js_business_name').hide();
            $('#js_school_name').hide();
        } else if ($('[id=js_company_executive]').prop('selected')) {
            $('#js_company_name').show();
            $('#js_business_name').hide();
            $('#js_school_name').hide();
        } else if ($('[id=js_freelance]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').show();
            $('#js_school_name').hide();
        } else if ($('[id=js_professional]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').show();
            $('#js_school_name').hide();
        } else if ($('[id=js_student]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').show();
        } else if ($('[id=js_house_person]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').hide();
        } else if ($('[id=js_other_person]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').hide();
        } else if ($('[id=js_occupation_blanc]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').hide();
            } 
            
    });
});
});



// ----- register02 -----

//  写真スライダー

$('.photo-slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    
    responsive: [{
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        } 
    }]

});