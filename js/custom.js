$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$(function () {
    $(document).on('click', '.favorite-btn', function () {
        var url = $(this).attr('href');
        var icon = $(this).find('i');

        $.post(url, null, function (data) {
            if (data.result) {
                if (data['isFavorite']) {
                    $(this).addClass('btn-active');
                    icon.removeClass('far').addClass('fas');
                } else {
                    $(this).removeClass('btn-active');
                    icon.removeClass('fas').addClass('far');
                }
            }
        });

        return false;
    });
});

/**
 * Send Google Analytics action
 * @param hitType
 * @param eventCategory
 * @param eventAction
 * @param eventLabel
 */
function sendGoogleAnalyticsAction(hitType, eventCategory, eventAction, eventLabel) {
    if (!_enabled_google_analytics) {
        return;
    }

    console.log('GA', hitType, eventCategory, eventAction, eventLabel);

    ga('send', {
        hitType: hitType,
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
    });
}
