<template>
<div class="admin">
    <h2>There are many alternate algorithms other than the ones on this site. Feel free to upload your own for quick reference and practice!</h2>
    <div class="heading">
    <h2>Add an Item</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Name">
	<input v-model="description" placeholder="Algorithm">
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.title}}</h2>
        <img :src="addItem.path" />
      </div>
    </div>
    <div class="heading">
      <h2>Or...Edit/Delete an Item</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.title">
	<input v-model="description" placeholder="New description">
        <p></p>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
	<button @click="editItem(findItem)">Edit</button>
      </div>
    </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Myalgorithms',
  data() {
    return {
      title: "",
      description: "",
      file: null,
      items: [],
      addItem: null,
      findTitle: "",
      findItem: null,
    }
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          path: r1.data.path,
 description: this.description
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
  try {
    let response = await axios.get("/api/items");
    this.items = response.data;
    return true;
  } catch (error) {
    console.log(error);
  }
},
  async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
 description: this.findItem.description,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
  background-color: white;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
</style>
