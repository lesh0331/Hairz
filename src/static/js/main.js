$(document).ready(function () {
    // Initially select 요일별방문고객
    $("#day-customer").addClass("selected");

    $("#day-customer").click(function () {
        $(".visit-customer").removeClass("selected");
        $(this).addClass("selected");
    });

    $("#month-customer").click(function () {
        $(".visit-customer").removeClass("selected");
        $(this).addClass("selected");
    });
});