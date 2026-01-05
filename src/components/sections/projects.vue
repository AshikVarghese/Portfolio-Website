<template>
  <!-- Header -->
  <Heading tempID="projects" heading="Projects" headingNum="02"></Heading>

  <!-- Place Special Tiles Here </ -->

  <Tile
    special="true"
    title="Bold Sales CRM"
    description="A  dynamic and customizable CRM platform for managing sales, pipelines, and customer relationships."
    :languages="['React TS', 'Next JS', 'Tailwind CSS', 'SCSS']"
    gitLink=""
    exLink="https://syncfusion.boldsalescrm.com/"
    imageURL="/images/BoldSales.png"
  ></Tile>

  <Tile
    flip="true"
    special="true"
    title="Student Framework Portal"
    description="A portal empowering college students and staff with a digital gateway to student DB, resources, collaboration, and growth, built using the MEAN stack."
    :languages="['MYSQL', 'ExpressJS', 'React JS', 'NodeJS']"
    gitLink="https://github.com/AshikVarghese/StudFrameworkFrontend"
    exLink=""
    imageURL="/images/StudentFramework.png"
  ></Tile>

  <Tile
    special="true"
    title="Alumni Database Portal"
    description="A portal that connects graduates, enables networking, and fosters a strong alumni community."
    :languages="['HTML', 'CSS & SCSS', 'JavaScript', 'EJS', 'MongoDB']"
    gitLink="https://github.com/AshikVarghese/AlumniPortal"
    exLink=""
    imageURL="/images/AlumniDatabase.png"
  ></Tile>

  <Tile
    flip="true"
    title="D-Apps"
    description="A secured decentralized mechanism using Ethereum blockchain. D-Apps are smart sytems/applications (like LMS, ERP, etc.) on a distributed network."
    :languages="['React JS', 'Solidity', 'Web3.JS', 'Moralis']"
    gitLink="https://github.com/AshikVarghese/D-Apps"
    exLink=""
    imageURL="images/DApps.png"
  ></Tile>

  <!-- /> Place Normal Tiles Here -->

  <!-- Other Projects -->
  <div class="w-2/3 h-auto rounded-lg bg-accent mx-auto mb-50px z-0">
    <h1 class="text-main text-center text-[25px]">
      The rest of my projects can be found on
      <a
        class="hover:text-main text-accent"
        href="https://www.github.com/AshikVarghese"
        target="_blank"
        >my GitHub Profile.</a
      >
    </h1>
  </div>
</template>

<script>
  import Heading from "../heading.vue";
  import Tile from "../tile.vue";

  export default {
    name: "projects",
    components: {
      Heading,
      Tile,
    },
  };
</script>
