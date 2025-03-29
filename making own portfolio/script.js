$(document).ready(function() {
    
    $(".project-card img").hover(
        function() {
            $(this).css("transform", "scale(1.1)");
            $(this).css("box-shadow", "0px 0px 20px rgba(0, 0, 0, 0.7)");
        },
        function() {
            $(this).css("transform", "scale(1)");
            $(this).css("box-shadow", "0px 0px 10px rgba(0, 0, 0, 0.5)");
        }
    );

    $("#about-section h2").click(function() {
        $(this).text("New Heading!");
    });

    $(".btn").hover(
        function() {
            $(this).css("background-color", "green");
        },
        function() {
            $(this).css("background-color", "#626F47");
        }
    );

    $(".btn2").hover(
        function() {
            $(this).css("background-color", "green");
        },
        function() {
            $(this).css("background-color", "orange");
        }
    );

    $("#resume-content").hide();

    $("#resume .btn").click(function(event) {
        $("#resume-content").slideToggle();

        var resumeLink = $("#resume-download-link").attr("href");
        if (resumeLink) {
            var downloadLink = $("<a>")
                .attr("href", resumeLink)
                .attr("download", "your-resume.pdf")
                .appendTo("body");
            downloadLink[0].click();
            downloadLink.remove();
        }
    });

    $(".map-container iframe").hide();

    $(".map-container .btn2").click(function() {
        $(".map-container iframe").slideToggle();
    });

    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        $('body').addClass(currentTheme);
    }

    $("#theme-toggle").click(function() {
        if ($('body').hasClass('dark-theme')) {
            $('body').removeClass('dark-theme');
            localStorage.removeItem('theme');
        } else {
            $('body').addClass('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    
    $(".btn").click(function(){
        var link = document.createElement('a');
        link.href = 'Jai resume_11zon.pdf';  // Yahan apni resume file ka path dalna
        link.download = 'My_Resume.pdf'; // Yahan jo naam chaho wo de sakte ho
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});


