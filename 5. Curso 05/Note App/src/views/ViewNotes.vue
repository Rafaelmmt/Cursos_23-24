<template>
  <div class="note">
    <div class="has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Escreva aqui sua nota..." />
        </div>
      </div>
    
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success-ligth">Add New Note</button>
        </div>
      </div>
    </div>
    
    <div class="card mb-4" v-for="i in 3">
      <div class="card-content">
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem nibh, maximus commodo sollicitudin eu, volutpat et mi. 
            Vestibulum rhoncus velit id turpis eleifend, dictum placerat purus lobortis. Nam vitae mauris in augue tristique tincidunt id sit amet neque. 
            Curabitur gravida diam nec ullamcorper sollicitudin. Phasellus vitae dui id dolor vulputate scelerisque. Praesent porta semper dui. Donec nec pretium mi. 
            Aenean tristique lacus eu sodales sodales.
          </p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>

</template>
