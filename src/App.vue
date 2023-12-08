<template>
  <div id="app">
    <header>
      <h1>User Management System</h1>
    </header>
    <FormComponent />
    <TableComponent />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TableComponent from "./components/TableComponent.vue";

export default {
  components: {
    FormComponent,
    TableComponent,
  },
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 0;
}

header {
  background-image: linear-gradient(to right, #0062e6, #33aeff);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 20px 0;
  margin-bottom: 40px;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem; /* Smaller font size for smaller screens */
  }

  header {
    padding: 15px 0;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem; /* Even smaller font size for mobile screens */
  }

  .form-container,
  .table-container {
    width: 95%; /* Adjusting width for smaller devices */
    margin: 20px auto; /* Centering content */
  }
}
</style>
