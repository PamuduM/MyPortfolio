/* ----------------------- js file for Projects and Assignments Page ----------------------- */

$(window).on('load', function () {
    $('#loader,#extra-div').fadeOut(1000);
    $('body').children(':not(#loader,#extra-div)').fadeIn(3000);
});

$(document).ready(function () {
    $('body').children(':not(#loader,#extra-div)').css('display', 'none');
});

/* ------------------------ Projects Page -------------------- */
$('#btnProject1').on('click', function () {
    $("#btnProject1>a").attr("target", "_blank");
    $("#btnProject1>a").attr("href", "");
});

$('#btnProject2').on('click', function () {
    $("#btnProject2>a").attr("target", "_blank");
    $("#btnProject2>a").attr("href", "");
});

$('#btnProject3').on('click', function () {
    $("#btnProject3>a").attr("target", "_blank");
    $("#btnProject3>a").attr("href", "");
});

$('#btnProject4').on('click', function () {
    $("#btnProject4>a").attr("target", "_blank");
    $("#btnProject4>a").attr("href", "");
});

$('#btnProject5').on('click', function () {
    $("#btnProject5>a").attr("target", "_blank");
    $("#btnProject5>a").attr("href", "");
});

$('#btnProject6').on('click', function () {
    $("#btnProject6>a").attr("target", "_blank");
    $("#btnProject6>a").attr("href", "");
});

$('#btnAllProjects').on('click', function () {
    // $('.display_desktop_projects').css('display', 'none');
    $('.display_desktop_projects').hide();

    // $('.display_all_projects').css('display', 'flex');
    $('.display_all_projects').show();

    $('#btnAllProjects').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnDesktop, #btnWeb').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnDesktop').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_projects').hide();

    // $('.display_desktop_projects').css('display', 'flex');
    $('.display_desktop_projects').show();

    $('#btnDesktop').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllProjects, #btnWeb').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnWeb').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_projects').hide();

    // $('.display_desktop_projects').css('display', 'none');
    $('.display_desktop_projects').hide();

    $('#btnWeb').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllProjects, #btnDesktop').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});


/* ------------------------ Assignments Page -------------------- */
for (let i = 1; i < 19; i++) {
    $('#btnAssignment-' + i).on('click', function () {
        let pressedBtnID = this.id;
        switch (pressedBtnID) {
            case "btnAssignment-1":
                $("#btnAssignment-1>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/CSS/CaseOne/index.html"
                });
                break;

            case "btnAssignment-2":
                $("#btnAssignment-2>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/CSS/CaseTwo/index.html"
                });
                break;

            case "btnAssignment-3":
                $("#btnAssignment-3>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/CSS/CaseThree/index.html"
                });
                break;

            case "btnAssignment-4":
                $("#btnAssignment-4>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/css/CaseFour/index.html"
                });
                break;

            case "btnAssignment-5":
                $("#btnAssignment-5>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/css/CaseFive/index.html"
                });
                break;

            case "btnAssignment-6":
                $("#btnAssignment-6>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/css/CaseSix/index.html"
                });
                break;

            case "btnAssignment-7":
                $("#btnAssignment-7>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/Transitions/CaseOne/index.html"
                });
                break;

            case "btnAssignment-8":
                $("#btnAssignment-8>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/Transitions/CaseTwo/index.html"
                });
                break;

            case "btnAssignment-9":
                $("#btnAssignment-9>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/Animations/CaseThree/index.html"
                });
                break;

            case "btnAssignment-10":
                $("#btnAssignment-10>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/Animations/CaseFour/index.html"
                });
                break;

            case "btnAssignment-11":
                $("#btnAssignment-11>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/Animations/CaseFive/index.html"
                });
                break;

            case "btnAssignment-12":
                $("#btnAssignment-12>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/Animations/CaseSix/index.html"
                });
                break;

            case "btnAssignment-13":
                $("#btnAssignment-13>a").attr({
                    "target": "_blank",
                    "href": "file:///D:/IJSE/GDSE64/MyWorkingZone/MyPortfolio/assignments/CSS-Frameworks/Pos/index.html"
                });
                break;

            case "btnAssignment-14":
                $("#btnAssignment-14>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Calculator/index.html"
                });
                break;

            case "btnAssignment-15":
                $("#btnAssignment-15>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/SPA/index.html"
                });
                break;

            case "btnAssignment-16":
                $("#btnAssignment-16>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Que/index.html"
                });
                break;

            case "btnAssignment-17":
                $("#btnAssignment-17>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Knight/index.html"
                });
                break;

            case "btnAssignment-18":
                $("#btnAssignment-18>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Game/index.html"
                });
                break;

            default:
                break;
        }
    });
}

$('#btnAllAssignments').on('click', function () {
    // $('.display_desktop_projects').css('display', 'none');
    $('.display_css_assignments').hide();
    $('.display_js_assignments').hide();

    // $('.display_all_projects').css('display', 'flex');
    $('.display_all_assignments').show();

    $('#btnAllAssignments').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnCSS, #btnJS').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnCSS').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_assignments').hide();
    $('.display_js_assignments').hide();

    // $('.display_desktop_projects').css('display', 'flex');
    $('.display_css_assignments').show();

    $('#btnCSS').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllAssignments, #btnJS').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnJS').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_assignments').hide();
    $('.display_css_assignments').hide();

    // $('.display_desktop_projects').css('display', 'none');
    $('.display_js_assignments').show();

    $('#btnJS').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllAssignments, #btnCSS').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });

    $('#assignments_page').css('height', '722px');
});