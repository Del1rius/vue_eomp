<template>
    <div class="container-fluid background ">
        <h2 class="display-2 text-white text-center mb-2 ">Contact ME!</h2>
        <Form class="text-center mx-auto">
        <div class="mb-2 text-white fs-3">
        <label for="name">Name:</label>
        </div>
        <div class="mb-2">
        <input type="text" id="name" name="name" class="border rounded-3 fs-3" required>
        </div>
        <div class="mb-2 text-white fs-3">
        <label for="email">Email:</label>
        </div>
        <div class="mb-2">
        <input type="email" id="email" name="email" required class="border rounded-3 fs-3">
        </div>
        
        <div class="mb-2 text-white fs-3">
        <label for="message">Your Message:</label>
        </div>
        <div class="mb-2">
        <textarea id="message" name="message" rows="4" cols="50" class="border rounded-3 fs-3" required></textarea><br><br>
        </div>
        <div class="mb-2">
        <input type="submit" value="Submit" class="submit-btn fs-3">
        </div>
        </Form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.background {
    min-height: 100vh;
    background-color: #008080;
}
Form {
    border: 3px solid white;
    border-radius: 25px;
    width: 1000px;
}

.submit-btn {
    background-color: #008080;
    border: 2px solid white;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;

}

.submit-btn:hover {
    background-color: black;
    color: #008080 !important;
    font-weight: bold;
}
</style>