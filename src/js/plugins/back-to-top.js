$(function() {

  $(window).on('scroll', function() {
    const $backToTopElements = $('a[data-attribute*="back-to-top"]')
    $backToTopElements.toggleClass(
      'back-to-top-show',
      $backToTopElements.length && $(this).scrollTop() >= 100
    )
  })

  $(document).on('click','a[data-attribute*="back-to-top"]', function() {
    $('body,html').animate({ scrollTop: 0 }, 800)
  })
})
