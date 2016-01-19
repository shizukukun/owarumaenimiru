$(function () {

    $.ajax({
            type: 'GET',
            url: 'http://www.b-ch.com/contents/feat_monthly/inc/list_endsoon.php',
            dataType: 'html',
            success: function (data) {

                var links = $(data).find('.pom-list').find('a');
                var html = '<ul>';

                $(links).each(function (i, elem) {
                    var title = $(elem).html().toString()[0] == '・' ? $(elem).html().toString().substr(1) : $(elem).html().toString();
                    html += '<li><a href="http://www.b-ch.com' + $(elem).attr('href') + '" target="_blank">' + title + '</a></li>\n';
                });

                html += '</ul>'
                $('#content').html(html);

            },
            error: function () {
                $('#content').html('データ読込失敗');
            }

        }
    );

});
