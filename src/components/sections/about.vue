<template>
  <div>
    <Heading tempID="about" heading="About" headingNum="01"></Heading>

    <div
      class="nav-sm:w-[80%] ssm:w-[85%] w-2/3 flex justify-center flex-col mx-auto select-none"
    >
      <h1 class="text-accent text-[40px] font-bold text-center">Who am I?</h1>

      <p class="w-full text-base ssm:text-base-sm text-main">
        I’m Ashik Varghese Kalapurakal Thomas, a frontend-focused software
        engineer with a strong product mindset. I build clean, scalable, and
        user-centric web applications, with hands-on experience developing a CRM
        product from the ground up using React, TypeScript, and modern frontend
        tooling.
        <br /><br />
        I hold a Bachelor’s degree in Computer Science & Engineering and am
        currently pursuing my Master’s in International Information Systems
        (IIS) at FAU, Germany. Alongside engineering, I’m deeply interested in
        technology management and enjoy exploring diverse technologies that
        bridge technical execution with product and business thinking.
        <br /><br />
        I approach problems with equal parts curiosity and structure, building
        solutions that are technically sound, visually appealing, and
        practically useful. My main focus these days is on
        <span class="text-accent">Web Development</span>, with a growing
        interest in
        <span class="text-accent">Product and Technology Management</span>
        through my master’s, as shaping a product by bringing together
        technology, design, and user needs is a puzzle I enjoy solving.<br /><br />
      </p>
    </div>
  </div>
</template>

<script>
  import Heading from "../heading.vue";

  export default {
    name: "about",
    components: { Heading },
  };
</script>
