<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3>Registrar Producto</h3>
            <h1>{{ this.formstate.$valid }}</h1>
            <div class="row justify-content-center">
                <vue-form @submit.prevent="onSubmit" :state="formstate">
                    <div class="col-12">
                        <validate tag="label">
                            <span>Producto: </span>
                            <input type="text" id="productName" required name="productName" v-model="model.productName"
                                class="form-control">
                            <field-messages name="productName" show="$touched">
                                <div slot="required">El nombre es requerido</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label">
                            <span>Precio: </span>
                            <input type="number" id="productPrice" required name="productPrice" v-model="model.productPrice"
                                class="form-control">
                            <field-messages name="productPrice" show="$touched">
                                <div slot="required">El precio es requerido</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label">
                            <span>URL de Imagen: </span>
                            <input type="text" id="productImage" required name="productImage" v-model="model.productImage" class="form-control">
                            <field-messages name="productImage" show="$touched">
                                <div slot="required">La URL de imagen es requerida </div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="col-12">
                        <validate tag="label">
                            <span>Stock: </span>
                            <input type="number" id="productStock" required name="productStock" v-model="model.productStock"
                                class="form-control">
                            <field-messages name="productStock" show="$touched">
                                <div slot="required">El stock es requerido</div>
                            </field-messages>
                        </validate>
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Registrar producto</button>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
  

<script>
import axios from 'axios';

export default {
    name: 'FormularioProducto',
    props: {
        msg: String
    },
    data() {
        return {

            formstate: {},
            model: {
                productName: "",
                productPrice: 0,
                productImage: "",
                productStock: 0,
            
            },

        };

    },
    methods: {
    
        onSubmit() {
            console.log(this.formstate)
            this.sendData();
            if (this.formstate.$valid) {
                alert("Form Sent!")
                console.log(this.model)
                
                return;
            }
        },
        sendData() {
  const data = {

    // {
    //     "name": "StratoRRcaster",
    //     "price": 2909.99,
    //     "image": "https://www.fender.cl/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/g/e/ge434_0144522500v1.jpg",
    //     "stock":7
    // }
    name: this.model.productName,
    price: this.model.productPrice,
    image: this.model.productImage,
    stock: this.model.productStock,

  };
  console.log("enviando:");
  console.log(data);
  axios
    .post('https://6494c46d0da866a953682d8d.mockapi.io/api/sneelyg/v1/inventary', data)
    .then(response => {
      // Maneja la respuesta del servidor
      console.log(response.data);

      // Obtener el código HTML de la respuesta
      const html = response.data;

      // Mostrar el código HTML en la consola
      console.log("Código HTML de la respuesta:");
      console.log(html);

      // Verificar si el código de respuesta es 200
      if (response.status === 200) {
        // Mostrar una alerta si el código es 200
        alert("¡El código de respuesta es 200!");
      }
    })
    .catch(error => {
      // Maneja el error
      console.error(error);
    });
}



    }
}


</script>


<style>
div {
    color: white;
}
</style>