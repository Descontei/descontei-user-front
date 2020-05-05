<template>
  <div class="w-full h-full">
    <heading
      logo="main-logo"
      shop-cart="shopping-cart-black"
      classes="bg-gray-100"
    />
    <following-banner />
    <timeline-tracker />
  </div>
</template>

<script>
import Heading from '../../components/Heading'
import FollowingBanner from '../../components/FollowingBanner'
import TimelineTracker from '../../components/TimelineTracker'

export default {
  components: { Heading, FollowingBanner, TimelineTracker }
}
</script>
