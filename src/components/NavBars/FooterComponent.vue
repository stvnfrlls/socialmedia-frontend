<template>
  <div class="footer-container bg-dark text-white p-3">
    <div class="row d-none d-lg-flex">
      <div class="col-md-6">
        <h5>Contact Us</h5>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 789</p>
      </div>
      <div class="col-md-6">
        <h5>Follow Us</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white">Facebook</a></li>
          <li><a href="#" class="text-white">Twitter</a></li>
          <li><a href="#" class="text-white">Instagram</a></li>
        </ul>
      </div>
      <hr class="my-4" />
    </div>
    <div class="text-center">
      &copy; 2023 Your Website. All rights reserved.
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
footer {
  padding: 30px 0;
  background-color: #343a40;
}

footer h5,
footer p,
footer a {
  color: #fff;
}

footer a:hover {
  color: #c02628;
}

footer ul.list-unstyled {
  padding: 0;
  list-style: none;
}

footer hr {
  border-top: 1px solid #868e96;
}

footer p.copyright {
  margin-top: 20px;
  color: #bbb;
}
</style>
